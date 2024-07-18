import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import  bcrypt  from 'bcryptjs'
import { NextResponse } from "next/server";



export async function GET(request) {
    let users = []
    
    try {
        await connectDb();
        users = await User.find().select("-password");
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to get users",
            success: false,
        })
    }

    return NextResponse.json(users);
}

export async function POST(request) {
    // Fetch user details from the request
    const { name, email, password, about, profileURL } = await request.json();

    try {
    
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                message: "Email already in use",
                status: false,
            }, {
                status: 500,
            });
        }
        
        // Create user object with the user model
        const user = new User({
            name,
            email,
            password,
            about,
            profileURL
        });

        // Save the object to the database
        user.password = bcrypt.hashSync(
            user.password,
            parseInt(process.env.BCRYPT_SALT)
        );
        console.log(user)
        await connectDb();
        const createdUser = await user.save();
        const response = NextResponse.json(createdUser, {
            status: 201,
        });
        return response;

    } catch (error) {
        console.log(error);
        // Handle duplicate key error
        if (error.code === 11000) {
            return NextResponse.json({
                message: "Email already in use",
                status: false,
            }, {
                status: 500,
            });
        }
        // General error handling
        return NextResponse.json({
            message: "User not created",
            status: false,
        }, {
            status: 500,
        });
    }
}
export function DELETE(request){
    console.log("delete api called")
    return NextResponse.json({
        message: "delete api called!!",
        status: true,
    },{
        status: 200, 
        statusText:"I love you dude"
    });
}

export function PUT(){

}