import { vehicleControllers } from "@/services/controllers"

type ResponseData = {
    message: string
}

export async function POST(req: Request) {
    const response = await vehicleControllers.create(req)
    return Response.json({response})

}