import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.mercadopago.com/',
    headers: {
      Authorization: `Bearer TEST-7635355043857059-050908-c368fb73c40daec090d0abef6fbc0a1f-1370581130`
    }
  })