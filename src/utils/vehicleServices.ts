import { jsonConfig } from "@/apis/common.service"
import { baseURL } from "@/apis/helper/constants"
import { Vehicle } from "@/types"
import axios from "axios"

const url = `${baseURL}/vehicles`

const getAll = async (): Promise<Vehicle[]> => {
    const response = await axios.get(`${url}/`, jsonConfig)
    return response.data
}

const getVehicleDetail = async (id: string): Promise<Vehicle> => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
}

export { getAll, getVehicleDetail }