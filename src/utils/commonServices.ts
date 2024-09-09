import { baseURL, multipartConfig } from "@/constants"
import axios from "axios"

export const fileUploadOnS3 = async (file: FormData) => {
    return await axios.post(`${baseURL}/upload`, file, multipartConfig)
}