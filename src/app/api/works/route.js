import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { Work } from "@/models/work";
import jwt from "jsonwebtoken"



export async function GET(request) {
    let works = []
    
    try {
        await connectDb();
        works = await Work.find();
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to get users",
            success: false,
        })
    }

    return NextResponse.json(works);
}

export async function POST(request) {
    
    //fetch work detail from request
    const {title,description,userId,status } = await request.json();
    //fetching logged in user id

    const authToken = request.cookies.get("authToken")?.value
    //console.log(authToken)

    const data = jwt.verify(authToken, process.env.JWT_KEY)
    //console.log(data)
    
    //create work object with user model
    try {
        
        const work = new Work({
            title,
            description,
            userId:data._id,
            status,
        })
        await connectDb();
        const createdWork = await work.save()
        return NextResponse.json(createdWork,{
            status: 201,
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to create work",
            success: false,
        })
    }
}