import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

mercadopago.configure({
  access_token: String(process.env.MERCADOPAGO_ACCESS_TOKEN)
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { collection_id } = req.body;

  try {
    const transaction = await mercadopago.payment.get(collection_id);
    console.log(transaction)
    res.json(transaction);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao recuperar informações da transação' });
  }
}