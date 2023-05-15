import { api } from "@/lib/axios";
import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;
  try {
    const response = await api.get("/preapproval/search", {
      params: {
        email: "nando.com"
      }
    });
    const searchResult = response.data;
    if (searchResult.results.length === 0) {
      res.status(404).json({ message: "Nenhuma assinatura encontrada para este e-mail" });
    } else {
      res.status(200).json(searchResult);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar as assinaturas" });
  }
}
