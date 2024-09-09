import { vehicleControllers } from "@/services/controllers"

export async function GET(req: Request) {
    const response = await vehicleControllers.getAll()
    return Response.json(response)
}

export async function POST(req: Request) {
    const response = await vehicleControllers.create(req)
    return Response.json({response})

}