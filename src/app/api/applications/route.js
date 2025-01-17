import { Form } from "@/utils/models/forms.model";
import { NextResponse } from "next/server";

export async function Get() {
    try {
        const applications = await Form.find();
        return NextResponse.json({message:'Successfully fetched', data:applications}, {status:201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:'Something went wrong please try again'},{status:500})
    }
}
export async function POST(req){
    try {
        const data = await req.json();
        const {name, email, phone, city, district, state, pinCode} = data
        if(!name || !email || !phone){
            return NextResponse.json({message:"Invalid Data Please Fill Form Correctly"}, {status:400})
        }
        const newForm = new Form({
            name,email,phone,city,district,state,pinCode
        })
        await newForm.save();

        return NextResponse.json({message:"Application submitted Successfully"},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:'Something went wrong please try again'},{status:500})
    }
}