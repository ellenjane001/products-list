import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const axiosReq = await axios.get(`${process.env.SHOPIFY_API_PRODUCT_URL}`, {
        headers: { "Content-Type": "application/json" }
    })
    return new NextResponse("Hello")
}