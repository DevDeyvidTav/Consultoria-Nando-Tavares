import axios from "axios";
import { PreApprovalProps, PreferenceProps } from "./@types";

export async function getPreference(request: PreferenceProps) {
    try {
        const response = await axios.post('/api/mercadopago_payment', request)
        const { url } = response.data
        window.location.href = url
    } catch (error) {
        console.error(error);
    }
}

export async function getPreApproval(email: string) {
    try {
        const response = await axios.post('/api/subscription', { email: email })
        const { url } = response.data
        window.location.href = url
    } catch (error) {
        console.error(error);
    }
}