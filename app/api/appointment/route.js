import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
const prisma = new PrismaClient()

export async function POST(req,res) {
    try {
        const payload = await req.json()
        const {name, medicalHistory ,contactDetail} = payload
        // console.log(name)
        // console.log(email)
        const result = await prisma.patient.create({
            data:{
                name, medicalHistory ,contactDetail
            }
        })
        console.log(result)
        return NextResponse.json({ result: payload, success: true })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ result: error, success: false })
    }
}

export async function GET() {
    let data = [];
    try {
        data = await prisma.patient.findMany()
        // console.log(data)
        return NextResponse.json({ result: data, success: true })
    } catch (error) {
        console.log("error", error)
        return NextResponse.json({ result: data, success: false })
    }
}
