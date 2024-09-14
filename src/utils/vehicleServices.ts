import { getRandomVehicleParams, TableParams } from "@/components/admin/AllVehicleTable";
import { baseURL, jsonConfig } from "@/constants"
import { newStock, paginationParams, Vehicle } from "@/types"
import axios from "axios"
import qs from 'qs'

const url = `${baseURL}/vehicles`

interface getAllProps {
    data: Vehicle[];
    count: number;
    totalPages: number
}

const addNewVehicle = async (vehicle: Vehicle) => {
    return await axios.post(`${url}/addNewVehicle`, vehicle, jsonConfig)
}

const getAll = async (): Promise<getAllProps> => {
    const response = await axios.get(`${url}/`, jsonConfig)
    return response.data
}

const getVehicleDetail = async (id: string): Promise<Vehicle> => {
    const response = await axios.get(`${url}/${id}`)
    return response.data.data
}

const getNewStock = async (): Promise<newStock[]> => {
    const response = await axios.get(`${url}/getNewStock`, jsonConfig)
    return response.data.data
}

const markSoldUnsold = async (id: string) => {
    return await axios.put(`${url}/markSoldUnsold`, { id }, jsonConfig)
}

const getAllWithPagination = async (params: paginationParams) => {
    const response = await axios.get(
        `${baseURL}/vehicles/pagination?${qs.stringify(params)}`
    );
    return response.data
}

export { getAll, getVehicleDetail, getNewStock, addNewVehicle, markSoldUnsold, getAllWithPagination }