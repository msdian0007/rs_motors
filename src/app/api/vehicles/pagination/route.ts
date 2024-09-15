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
        // const limitInString = searchParams.get('limit')
        // const pageInString = searchParams.get('page')
        let limit = parseInt(searchParams.get('limit') ?? '')
        let page = parseInt(searchParams.get('page') ?? '')
        if (!limit && !page) return Response.json({ error: 'Failed to fetch data' })
        await dbConnect()
        const count = await vehicleModal.find().countDocuments()
        const data = await vehicleModal.find().sort({ _id: -1 }).skip((page - 1) * limit).limit(limit)
        return Response.json({ data, count, totalPages: Math.ceil(count / limit) })
    } catch (err) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}