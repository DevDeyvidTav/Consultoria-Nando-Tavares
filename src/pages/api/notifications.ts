import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const apiKey = String(process.env.SENDGRID_API_KEY)
  const email = String(process.env.CONSULTORIA_EMAIL)
  
  if (req.method === 'POST') {
    sgMail.setApiKey(apiKey);

    const { to, subject, text, html } = req.body;

    const msg = {
      to: to,
      from: email,
      subject: subject,
      text: text,
      html: html
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro ao enviar o email.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}