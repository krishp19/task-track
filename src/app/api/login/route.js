import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from 'bcryptjs';
import  jwt  from 'jsonwebtoken';
import { connectDb } from "@/helper/db";


export async function POST(request){
    const {email, password} = await request.json();


    try {
        await connectDb();
        const user  = await User.findOne({
            email: email
        });

        if(user === null){
            throw new Error("User not Found !!")
        }

        const matched = bcrypt.compareSync(password, user.password)
        if(!matched){
            throw new Error("Password is incorrect !!")
        }

        //Generate Token
        const token = jwt.sign({
            _id: user._id,
            name:user.name
        }, process.env.JWT_KEY)
        
        //create nextResponse-- cookie
        const response = NextResponse.json({
            message:"login success",
            success:true,
            user: user.name,
        })

        response.cookies.set("authToken",token,{
            expiresIn:'1d',
            httpOnly: true,
        })

        //console.log(user)
        //console.log("token: ",token)
        
        return response;
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false,
        },{
            status: 500,
        })
    }
}