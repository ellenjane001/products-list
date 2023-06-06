import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    try {
        const axiosReq = await axios.get(`${process.env.SHOPIFY_API_PRODUCTS_URL}`, {
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": `${process.env.SHOPIFY_ACCESS_TOKEN}`
            }
        })
        return NextResponse.json({ data: axiosReq.data, status: 200 })
    } catch (e) {
        return NextResponse.json({ message: e, status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const axiosReq = await axios.post(`${process.env.SHOPIFY_API_PRODUCTS_URL}`, {
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": `${process.env.SHOPIFY_ACCESS_TOKEN}`
            }
        })
        return NextResponse.json({ data: axiosReq.data, status: 200 })
    } catch (e) {
        return NextResponse.json({ message: e, status: 500 })
    }
}