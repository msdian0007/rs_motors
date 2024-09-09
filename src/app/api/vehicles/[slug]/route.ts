import { vehicleControllers } from "@/services/controllers";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    const response = await vehicleControllers.getVehicleDetail(params.slug)
    return Response.json(JSON.stringify(response))
}