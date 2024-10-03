import dbConnect from "@/app/lib/db";
import vehicleModal from "@/services/modals/vehicleSchema";
import { Vehicle } from "@/types";

type Data = {
    data: Vehicle[];
}

type ErrorResponse = {
    error: string;
}

export async function GET(req: Request,) {
    try {
        await dbConnect()
        const data = await vehicleModal.find({})
        return Response.json({ data })
    } catch (err) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}