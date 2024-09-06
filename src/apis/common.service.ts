
import { Vehicle } from "@/types";
import { fetchWrapper } from "./helper";
import { baseURL } from "./vehicle.service";
import axios from "axios";

export const multipartConfig = {
    headers: {
        'content-type': 'multipart/form-data',
    },
};

export const jsonConfig = {
    headers: {
        'content-type': 'application/json',
    },
};

const fileUploadOnS3 = async (file: FormData) => {
    // return await fetchWrapper.post(`${baseURL}/upload`, file)
    return await axios.post(`${baseURL}/upload`, file, multipartConfig)
}

// EXPORT
export const commonServices = {
    fileUploadOnS3,
}