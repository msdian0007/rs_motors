import dbConnect from "@/app/lib/db";
import vehicleModal from "@/services/modals/vehicleSchema";

export async function GET(req: Request,) {
    try {
        await dbConnect()
        const data = await vehicleModal.find({ isSold: false }, { coverImage: 1, brand: 1, modelName: 1 }).sort({ _id: -1 }).limit(11)
        return Response.json({ data })
    } catch (err: any) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}