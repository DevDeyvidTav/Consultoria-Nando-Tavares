import { sendEmail } from "@/lib/sendGrid";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import img from "/Logo.png"


export default function Success(id: any) {
    const [emailSent, setEmailSent] = useState(false)
    const payment_id = id.id
    const [details, setDetails] = useState<any>()

    const getPaymentDetails = async () => {
        try {
            const response = await axios.get(`/api/transaction?payment_id=${payment_id}`)
            setDetails(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPaymentDetails();
    }, []);

    useEffect(() => {
        if (details && !emailSent) {
            sendEmail({
                email: "deydeyvid2022@gmail.com",
                subject: `inscrição do cliente ${details?.clientName.toUpperCase()}`,
                body: `o cliente ${details?.clientName.toUpperCase()} de cpf ${details?.cpf} contratou o ${details?.title} `,
                html: `<strong style={{color: "red"}}>Consultoria Nando Tavares</strong>
                <p>Parabéns Nando, o cliente ${details?.clientName.toUpperCase()} de cpf ${details?.cpf} contratou o ${details?.title}  </p>
                `
            });
            sendEmail({
                email: "deydeyvid2022@gmail.com",
                subject: `inscrição do cliente ${details?.clientName.toUpperCase()}`,
                body: `Parabéns ${details?.clientName.toUpperCase()}, você contratou o ${details?.title} `,
                html: `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #000;">
                <div style="background-color: #000; padding: 20px;">
                    <h1 style="color: #ff0000; text-align: center;">Consultoria Nando Tavares</h1>
                </div>
                <div style="padding: 20px;">
                    <p>Olá <strong>${details?.clientName.toUpperCase()}</strong>,</p>
                    <p>Parabéns! Você contratou o <strong>${details?.title}</strong> com a Consultoria Nando Tavares.</p>
                    <p>Para acessar, clique no botão abaixo:</p>
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="https://wa.me/5581997210434" target="_blank" style="background-color: #ff0000; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Acessar</a>
                    </div>
                </div>
            </div>
                `
            });
            setEmailSent(true);
        }
    }, [details, emailSent]);
    return (
        <div className="text-white w-full h-screen ">
            <div className="w-[80%] mx-auto flex flex-col h-full lg:items-center lg:gap-32 lg:justify-center lg:flex-row items-start text-center md:text-start gap-5">

                <div className="text-2xl ">
                    <div className="" >
                        <Image
                            src="/Logo.png"
                            width={250}
                            height={150}
                            alt={"logo"}
                            className="mx-auto mb-5 mt-2 lg:hidden" />
                        <h2 className="text-3xl font-semibold ">
                            OBRIGADO,
                        </h2>
                        <h3>
                            POR ESCOLHER A CONSULTORIA NANDO TAVARES,
                        </h3>
                        <p>
                            VAMOS JUNTOS CONQUISTAR O SHAPE QUE VOCÊ TANTO DESEJA.
                        </p>
                    </div>

                    <div>
                        <p>
                            EM INSTANTES
                            VOCÊ SERA REDIRECIONADO PARA NOSSO WHATSAPP, ONDE VAMOS AVALIAR SEU DIA A DIA,
                            E MONTAREMOS O MELHOR PLANEJAMENTO, PARA QUE VOCÊ CONQUISTE SEUS OBJETIVOS!
                        </p>
                        <div className="text-zinc-400 font-extralight text-sm">
                            CASO VOCÊ NÃO SEJA REDIRECIONADO,
                            <a
                                className="text-[#E63940] underline"
                                href="#">CLIQUE AQUI
                            </a>
                        </div>
                        <div className="mt-5">
                            <Link
                                className="bg-[#E63940] py-1 flex justify-center px-6 text-xl"
                                href="/">
                                Voltar para a tela inicial
                            </Link>
                        </div>
                    </div>
                </div>
                <Image
                    src="/Logo.png"
                    width={250}
                    height={150}
                    alt={"logo"}
                    className="mx-auto mb-5 mt-2 hidden lg:flex" />
            </div>
        </div>
    )
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const paymentId = Number(query.payment_id);

    return {
        props: {
            id: paymentId,
        }
    }
};
