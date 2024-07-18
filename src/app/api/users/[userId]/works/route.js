import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    const {userId} = params;
    
    try {
        const work = await Work.find({
            userId:userId
        })
        return NextResponse.json(work);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"failed to get task",
            status:404,
            success:false,
        })
    }
}