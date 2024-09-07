import { vehicleControllers } from "@/services/controllers"

import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export async function GET(req: Request) {
    const response = await vehicleControllers.getAll()
    return Response.json(response)
}