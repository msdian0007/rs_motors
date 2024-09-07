
import { Vehicle, VehicleResponse } from "@/types";
import { fetchWrapper } from "./helper";
import { BehaviorSubject } from "rxjs";
import axios from "axios";
import { jsonConfig, multipartConfig } from "./common.service";
import { baseURL } from "./helper/constants";

const url = `${baseURL}/vehicles`
const userSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}'));


const addNewVehicle = async (vehicle: Vehicle) => {
    return await fetchWrapper.post(`${url}/addNewVehicle`, vehicle)
}

const getAll = async (): Promise<Vehicle[]> => {
    const response = await axios.get(`${url}/getAll`, jsonConfig)
    return response.data
}


// EXPORT
export const vehicleServices = {
    get userValue() { return userSubject.value() },
    addNewVehicle,
    getAll,
}