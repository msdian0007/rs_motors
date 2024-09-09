import axios from "axios";
import { baseURL } from "./helper/constants";

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
    return await axios.post(`${baseURL}/upload`, file, multipartConfig)
}

// EXPORT
export const commonServices = {
    fileUploadOnS3,
}