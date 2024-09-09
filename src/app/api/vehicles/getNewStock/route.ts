import { vehicleControllers } from "@/services/controllers";

export async function GET() {
    const response = await vehicleControllers.getNewStock()
    return Response.json(JSON.stringify(response))
}