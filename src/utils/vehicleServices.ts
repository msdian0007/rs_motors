import { jsonConfig } from "@/apis/common.service"
import { baseURL } from "@/apis/helper/constants"
import dbConnect from "@/app/lib/db"
import { newStock, Vehicle } from "@/types"
import axios from "axios"

const url = `${baseURL}/vehicles`

const getAll = async (): Promise<Vehicle[]> => {
    await dbConnect()
    const response = await axios.get(`${url}/`, jsonConfig)
    return response.data
}

const getVehicleDetail = async (id: string): Promise<Vehicle> => {
    await dbConnect()
    const response = await axios.get(`${url}/${id}`)
    return JSON.parse(response.data)
}

const getNewStock = async (): Promise<newStock[]> => {
    await dbConnect()
    const response = await axios.get(`${url}/getNewStock`, jsonConfig)
    return response.data
}

export { getAll, getVehicleDetail, getNewStock }