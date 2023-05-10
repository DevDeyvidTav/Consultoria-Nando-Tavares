import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

 mercadopago.configure({
  access_token: 'TEST-7635355043857059-050908-c368fb73c40daec090d0abef6fbc0a1f-1370581130',

})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const Email = String( req.body.email )
    console.log(Email)
    const url = String(process.env.NEXT_PUBLIC_VERCEL_URL)
    if (req.method !== 'POST') {
      return res.status(405).end(); 

      
    
    }
    const subscription = await mercadopago.preapproval.create({
        reason: "É uma breve descrição que o assinante verá durante o processo de checkout e nas notificações. É obrigatório apenas para assinaturas sem plano associado.",
        auto_recurring: {
            transaction_amount: 300,
            frequency: 1,
            frequency_type: 'months',
            currency_id: "BRL"
        },
        back_url: `https://consultoria-nando-tavares.vercel.app/sell`,
        payer_email: Email
    })
  
    res.status(200).json({
      url: subscription.body.init_point
    })
    
  }