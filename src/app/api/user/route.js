// import { connectDb } from "@/utils/dbconnect";
import { Form } from "@/utils/models/forms.model";
import { User } from "@/utils/models/user.model";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cookieStore = cookies()
        const userId = cookieStore.get('userId');
        console.log('user cookie is', userId)
        const userDetails = await User.findById(userId.value);
        if(!userDetails){
            return NextResponse.json({message:'Invalid user!'}, {status:404})
        }
        return NextResponse.json({message:'Successfully fetched !', data:userDetails})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:"Something went wrong! please try again"}, {status:500})
    }
}

export async function POST(req) {
    try {
        const data = await req.json();
        const {formId, id, name, email, phone, address, status, password, city, district, state, pinCode, fType, refundAmount} = data;
        const [user, form] = await Promise.all([User.findOne({id}), Form.findById(formId)]);
        if(user){
            return NextResponse.json({message:"Id already used"}, {status:400})
        }
        const newUser = new User({
            id, name, email, phone, address, status, password, city, district, state, pinCode, fType, refundAmount
        })
        await newUser.save();
        form.active = false;
        await form.save();

        return NextResponse.json({message:'Successfully saved user details'}, {status:201})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message:"Something went wrong! please try again"}, {status:500})
    }
}