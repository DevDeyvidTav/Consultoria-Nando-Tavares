import { api } from "./axios"

export const getBilling = async (email:string) => {
    const response = await api.get(`/preapproval/search?payer_email=${email}`)
    return response.data
}