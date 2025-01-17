import { connectDb } from "@/utils/dbconnect";
import { User } from "@/utils/models/user.model";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

await connectDb();

export async function GET() {
    try {
        const cookieStore = cookies()
        const userId = cookieStore.get('userId');
        console.log('user cookie is', userId)
        const userDetails = await User.findById(userId);
        if(!userDetails){
            return NextResponse.json({message:'Invalid user!'}, {status:404})
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:"Something went wrong! please try again"}, {status:500})
    }
}

export async function POST(req) {
    try {
        const data = await req.json();
        const {id, name, email, phone, address, status, password, city, district, state, pinCode} = data;
        const user = await User.findOne({id});
        if(user){
            return NextResponse.json({message:"Id already used"}, {status:400})
        }
        const newUser = {
            id, name, email, phone, address, status, password, city, district, state, pinCode
        }
        await newUser.save();

        return NextResponse.json({message:'Successfully saved user details'}, {status:201})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:"Something went wrong! please try again"}, {status:500})
    }
}