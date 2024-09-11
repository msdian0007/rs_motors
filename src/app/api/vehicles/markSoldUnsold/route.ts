import dbConnect from "@/app/lib/db"
import vehicleModal from "@/services/modals"

export async function PUT(req: Request,) {
    try {
        await dbConnect()
        const body = await req.json()
        let vehicle = await vehicleModal.findById(body.id)
        if (!vehicle) throw new Error('User not found');
        vehicle.isSold = !vehicle.isSold
        await vehicle.save()
        return Response.json({ message: 'status updated' })
    } catch (err) {
        return new Response('Failed to fetch data', { status: 500 })
    }
}