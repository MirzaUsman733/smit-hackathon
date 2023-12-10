import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
const prisma = new PrismaClient()

export async function GET() {
    let data = [];
    try {
        await prisma.$connect()
        data = await prisma.doctor.findMany()
        // console.log(data)
    } catch (error) {
        console.log("error", error)
    }
    await prisma.$disconnect()
    return NextResponse.json({ result: data, success: true })
}
