
import { BuyPlan } from "@/components/BuyPlan"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"

interface checkoutRequest {
    amount: number;
    installments: number;
    product: string;
}

export default function Sell() {

    const [isLoading, setIsLoading] = useState(false)
    async function getCheckout(request: checkoutRequest) {
        setIsLoading(true)
        try {
            const response = await axios.post('/api/mercadopago_payment', request)
            const {url} = response.data
            window.location.href = url
        } catch (error) {
            setIsLoading(false)
            console.error(error);
        }
    }
    return (
        <div className="w-screen h-auto max-w-full">
            <div className="w-[80%] mx-auto text-center h-full  ">
                <h2 className="text-white font-medium text-3xl pt-6">
                    SELECIONE O PLANO:
                </h2>
                <div className="flex md:flex-row flex-col mt-12 gap-5">
                    <BuyPlan
                        isLoading={isLoading}
                        onclick={() => getCheckout({
                            product: 'Plano Mensal',
                            installments: 1,
                            amount: 300
                        })}
                        name="Plano mensal"
                        duration="mês"
                        price={300}
                        description="renovação automática a cada 30 dias, é possível cancelar aqui nesse mesmo site" />
                    <BuyPlan
                        isLoading={isLoading}
                        onclick={() => getCheckout({
                            product: 'Plano Bimestral',
                            installments: 6,
                            amount: 300
                        })}
                        name="Plano Bimestral"
                        duration="2 meses"
                        price={500}
                        description="parcelamento em até 6x em todos os cartões, boleto e pix" />
                    <BuyPlan
                        isLoading={isLoading}
                        onclick={() => getCheckout({
                            product: 'Plano Trimestral',
                            installments: 6,
                            amount: 600
                        })}
                        name="Plano Trimestral"
                        duration="3 meses"
                        price={600}
                        description="parcelamento em até 6x em todos os cartões, boleto e pix" />

                </div>
                <div className="pt-10  w-full pb-10">
                    <Link
                        className="text-white bg-zinc-900 mt-10 px-20 py-2"
                        href="/">
                        Voltar
                    </Link>
                </div>
            </div>
        </div>
    )
}



