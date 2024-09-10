import dbConnect from "@/app/lib/db";
import vehicleModal from "@/services/modals";
import { Vehicle } from "@/types";
import { type NextRequest } from 'next/server'

type Data = {
    data: Vehicle[];
}

type ErrorResponse = {
    error: string;
}

export async function GET(req: NextRequest,) {
    try {
        const searchParams = req.nextUrl.searchParams
        const results = searchParams.get('results')
        const page = searchParams.get('page')
        const current = searchParams.get('pagination[current]')
        const pageSize = searchParams.get('pagination[pageSize]')
console.log(searchParams)
        await dbConnect()
        const count = await vehicleModal.find().countDocuments()
        console.log("count")
        console.log(count)
        const data = await vehicleModal.find({})
        return Response.json({ data, count })
    } catch (err) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}