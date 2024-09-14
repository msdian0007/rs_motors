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
        const limit = searchParams.get('limit')
        const page = searchParams.get('page')
        if (!limit && !page) return Response.json({ error: 'Failed to fetch data' })
        await dbConnect()
    console.log(page)
    console.log(limit)
        const count = await vehicleModal.find().countDocuments()
        const data = await vehicleModal.find().skip((parseInt(page ?? '0') - 1) * parseInt(limit ?? '0')).limit(parseInt(limit ?? '0'))
        return Response.json({ data, count, totalPages: Math.ceil(count / parseInt(limit ?? '0')) })
    } catch (err) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}