import { NextResponse } from "next/server";


export function GET() {

    return NextResponse.json({
        name: "Bishwanath",
        email: "bishwanath@gamil.com"
    })
}