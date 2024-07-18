import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    
    const {userId} = params

    const user = await User.findById(userId).select("-password")
    return NextResponse.json(user)
}

export async function DELETE(request, {params}) {
    console.log(params);
    const { userId } = params;
    
    try {
        await User.deleteOne({
            _id: userId
        });
        return NextResponse.json({
            message: "User deleted successfully",
            success: true,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error deleting user",
            success: false,
        })
    }
}

export async function PUT(request,{params}) {
    const {userId} = params

    const {name,password,about,profileURL} = await request.json();

    try {
        const user = await User.findById(userId)

        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;
        await connectDb();
        const updatedUser = await user.save();
        return NextResponse.json(updatedUser)

    } catch (error) {
        return NextResponse.json({
            message: "Error updating user",
            success: false,
        })
    }
}