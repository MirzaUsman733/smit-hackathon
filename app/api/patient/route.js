import { NextResponse } from "next/server"

export async function GET() {
    let data = [
        {
            "name": "usman",
            "company": "slick starter",
            "price": "5000",
            "color": "black",
            "Category": "web development"
        }
    ]
    // let data = []
    // try {
    //     await mongoose.connect(connectionStr)
    //     data = await Product.find();
    // } catch (error) {
    //     console.log(error)
    // }
    // return NextResponse.json({ result: data, success: true })
    return NextResponse.json(data)

}