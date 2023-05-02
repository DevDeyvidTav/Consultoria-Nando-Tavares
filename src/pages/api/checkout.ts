import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const  {price_id}  = req.body;
    console.log(price_id);
    
    if (!price_id){
        throw new Error('Preço não encontrado')
    } 
    console.log(price_id)


    const successUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/success`;
    const cancelUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/sell`;
    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'subscription',
        line_items: [
            {
                price: price_id,
                quantity: 1, // Defina a quantidade para 1
            },
        ]
    });

    return res.status(201).json({
        checkout_url: checkoutSession.url
    });
}