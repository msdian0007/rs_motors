import { vehicleControllers } from "@/services/controllers"
import vehicleModal from "@/services/modals";
import { Vehicle } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    data: Vehicle[];
}

type ErrorResponse = {
    error: string;
}

export async function GET(req: Request,) {
    // const response = await vehicleControllers.getAll()
    // return Response.json(JSON.stringify(response))
    try {
        // await dbConnect()
        const data = await vehicleModal.find({})
        return Response.json({ data })
    } catch (err) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}