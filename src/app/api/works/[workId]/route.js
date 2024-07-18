import { Work } from "@/models/work"
import { User } from "@/models/user"
import { NextResponse } from "next/server"
import { connectDb } from "@/helper/db"


export async function GET(request, {params}) {
    
    const {workId} = params

    const work = await Work.findById(workId)
    return NextResponse.json(work)
}

export async function DELETE(request, {params}) {
    console.log(params);
    const { workId } = params;
    
    try {
        await connectDb();
        await Work.deleteOne({
            _id: workId
        });
        return NextResponse.json({
            message: "Work deleted successfully",
            success: true,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error deleting Work",
            success: false,
        })
    }
}


export async function PUT(request, {params}) {
    try {
        const {workId} = params;
        const {title, description, status} = await request.json();
        const work = await Work.findById(workId)

            work.title = title
            work.description = description
            work.status = status
        await connectDb();
        const updatedWork = await work.save()
        return NextResponse.json(updatedWork)

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error updating Work",
            success: false,
        })
    }
}
