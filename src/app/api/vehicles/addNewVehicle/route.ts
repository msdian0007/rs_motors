// import { vehicleControllers } from "@/services/controllers"
import dbConnect from "@/app/lib/db"
import vehicleModal from "@/services/modals"

export async function POST(req: Request,) {
    // const response = await vehicleControllers.create(req)
    // return Response.json({response})
    try {
        await dbConnect()
        const body = await req.json()
        const vehicle = new vehicleModal(body)
        await vehicle.save()
        return Response.json({ message: 'Data received' })
    } catch (err) {
        return Response.json({ error: 'Failed to fetch data' })
    }
}