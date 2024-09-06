
import { Vehicle } from "@/types";
import { fetchWrapper } from "./helper";
import { BehaviorSubject } from "rxjs";

export const baseURL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api" // development api
    : "http://localhost:3000/api" // production api

const url = `${baseURL}/vehicles`
const userSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') || '{}'));


const addNewVehicle = async (vehicle: Vehicle) => {
    const result = await fetchWrapper.post(`${url}/addNewVehicle`, vehicle)
    return result
}

// EXPORT
export const vehicleServices = {
    get userValue() { return userSubject.value() },
    addNewVehicle,
}