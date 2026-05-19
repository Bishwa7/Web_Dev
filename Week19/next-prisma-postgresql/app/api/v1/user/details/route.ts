import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try{
        const data = await req.json()

        // Validate body

        // Hash Password
        
        const user = await prisma.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        })


        console.log(user)

        return NextResponse.json(
            {
                message: "You have been Signed Up"
            },
            {
                status: 200
            }
        )
    }
    catch(err){
        console.error(err)

        return NextResponse.json(
            {
                message: "Something went wrong!"
            },
            {
                status: 500
            }
        )
    }
    
}