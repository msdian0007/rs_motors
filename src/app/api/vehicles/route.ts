import { vehicleControllers } from "@/services/controllers"

export async function GET(req: Request) {
    const response = await vehicleControllers.getAll()
    return Response.json(response)
}