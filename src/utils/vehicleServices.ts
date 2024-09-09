import { jsonConfig } from "@/apis/common.service"
import { baseURL } from "@/apis/helper/constants"
import dbConnect from "@/app/lib/db"
import { newStock, Vehicle } from "@/types"
import axios from "axios"

const url = `${baseURL}/vehicles`

const getAll = async (): Promise<Vehicle[]> => {
    const response = await axios.get(`${url}/`, jsonConfig)
    return JSON.parse(response.data)
}

const getVehicleDetail = async (id: string): Promise<Vehicle> => {
    const response = await axios.get(`${url}/${id}`)
    return JSON.parse(response.data)
}

const getNewStock = async (): Promise<newStock[]> => {
    const response = await axios.get(`${url}/getNewStock`, jsonConfig)
    return JSON.parse(response.data)
}

export { getAll, getVehicleDetail, getNewStock }