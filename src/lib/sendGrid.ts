import axios from "axios"
import { SendEmailProps } from "./@types"

export const sendEmail = async ({ email, subject, body, html }: SendEmailProps) => {
    try {
        const message = {
            to: email,
            subject,
            text: body,
            html
        }
        await axios.post('/api/notifications', message)
    } catch (error) {
        console.error(error)
    }
}