import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

 mercadopago.configure({
  access_token: 'TEST-7635355043857059-050908-c368fb73c40daec090d0abef6fbc0a1f-1370581130',

})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const Email = String( req.body.email )
    console.log(Email)
    const url = String(process.env.NEXT_PUBLIC_VERCEL_URL)
    try {
      if (req.method !== 'POST') {
        return res.status(405).end(); 
  
        
      
      }
      const subscription = await mercadopago.preapproval.create({
          reason: "plano com acesso a todo nosso conteúdo, tanto dietas como treinos e orientações da nossa equipe, com renovação automática",
          auto_recurring: {
              transaction_amount: 149.9,
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
      
    } catch (error) {
      console.log(error)
        res.status(500).json({
          message: "Email inválido"
        })
    }
    
  }