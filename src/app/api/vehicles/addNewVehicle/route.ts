import { vehicleControllers } from "@/services/controllers"
// import { apiHandler } from "@/services/helper/api-handler"

// const addNewVehicle = async (req: Request, res: Response) => {
//     await vehicleControllers.create(req, res)
// }

// export default apiHandler({
//     post: addNewVehicle
// })
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export async function POST(req: Request) {
    const response = await vehicleControllers.create(req)
    return Response.json({response})

}