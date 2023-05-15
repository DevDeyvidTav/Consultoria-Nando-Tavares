import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

mercadopago.configure({
    access_token: 'TEST-7635355043857059-050908-c368fb73c40daec090d0abef6fbc0a1f-1370581130'
})

export default async function Handler(req: NextApiRequest, res: NextApiResponse){
    const cancelmentId = String(req.query.cancelment_id)
    if(req.method !==  "PUT"){
        res.status(405).json("Metodo não permitido")
    }
    console.log('passou pelo method not allowed')
    try {
        const response = await mercadopago.preapproval.cancel(cancelmentId)
        console.log('passou pelo mercado pago')
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json("Erro interno de servidor")
    }
}
