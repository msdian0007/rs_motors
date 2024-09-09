// import { vehicleControllers } from "@/services/controllers";
import vehicleModal from "@/services/modals";
import { newStock } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: Request,) {
    // const response = await vehicleControllers.getNewStock()
    // return Response.json(JSON.stringify(response))
    try {
        // await dbConnect()
        const data = await vehicleModal.find({}, { coverImage: 1, brand: 1, modelName: 1 }).sort({ _id: -1 }).limit(11)
        return Response.json({ data })
    } catch (err: any) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}