import { baseURL, jsonConfig } from "@/constants"
import { newStock, Vehicle } from "@/types"
import axios from "axios"

const url = `${baseURL}/vehicles`

const addNewVehicle = async (vehicle: Vehicle) => {
    return await axios.post(`${url}/addNewVehicle`, vehicle, jsonConfig)
}

const getAll = async (): Promise<Vehicle[]> => {
    const response = await axios.get(`${url}/`, jsonConfig)
    return response.data.data
}

const getVehicleDetail = async (id: string): Promise<Vehicle> => {
    const response = await axios.get(`${url}/${id}`)
    return response.data.data
}

const getNewStock = async (): Promise<newStock[]> => {
    const response = await axios.get(`${url}/getNewStock`, jsonConfig)
    return response.data.data
}

export { getAll, getVehicleDetail, getNewStock, addNewVehicle }