import { BASE_URL } from "../http/axiosInterceptors"

export const getImage = (fileName) => {
    return `${BASE_URL}/uploads/${fileName}`
}