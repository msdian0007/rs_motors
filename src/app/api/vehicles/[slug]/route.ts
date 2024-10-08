import dbConnect from "@/app/lib/db";
import vehicleModal from "@/services/modals/vehicleSchema";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    try {
        await dbConnect()
        const data = await vehicleModal.findOne({ _id: params.slug })
        return Response.json({ data })
    } catch (err) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}