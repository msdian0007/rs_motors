import { baseURL, jsonConfig, multipartConfig } from "@/constants"
import { mailData } from "@/types"
import axios from "axios"

export const fileUploadOnS3 = async (file: FormData) => {
    return await axios.post(`${baseURL}/upload`, file, multipartConfig)
}

export const customerInterestNotification = async (data: mailData) => {
    return await axios.post(`${baseURL}/contact`, data, jsonConfig)

}