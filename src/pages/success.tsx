import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Success() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="text-white w-full h-screen ">
            <div className="w-[80%] mx-auto flex flex-col h-full lg:items-center lg:gap-32 lg:justify-center lg:flex-row items-start text-center md:text-start gap-5">
                {
                    isLoading ?
                        <div className="flex flex-col opacity-30 items-center justify-center w-full h-full">
                            <div className="w-full h-8 bg-gray-400 rounded-md mb-2 animate-pulse" />
                            <div className="w-full h-24 bg-gray-400 rounded-md mb-2 animate-pulse" />
                            <div className="w-full h-24 bg-gray-400 rounded-md mb-2 animate-pulse" />
                            <div className="w-full h-8 bg-gray-400 rounded-md mb-2 animate-pulse" />
                            <div className="w-full h-8 bg-gray-400 rounded-md mb-2 animate-pulse" />
                        </div>
                        :
                        <div className="lg:flex gap-32 justify-center">
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

                }
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
