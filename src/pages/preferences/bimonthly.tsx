import { BackButton } from "@/components/BackButton";
import { ProceedButton } from "@/components/ProceedButton";
import { getPreference } from "@/lib/mercadopago";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";


export default function Handler() {
    const [isLoading, setIsLoading ] = useState(false)
    async function handlePayment (){
        const request = {
            amount: 500,
            product: "Plano Bimestral",
            installments: 6
        }
        setIsLoading(true)
        await getPreference(request)
        setIsLoading(false)
    }
    return (
        <div className="w-screen h-screen">
            <div className="w-4/5 md:w-[800px] xl:w-[1140px] mx-auto h-full flex flex-col  text-white">
                <h2 className="text-4xl font-bold mt-20 w-auto">
                    Plano Bimestral
                </h2>
              
                <ul className="flex flex-col my-10 text-zinc-400">
                    <li className="flex items-center">
                        <BsCheck/>Renovação não é automática
                    </li>
                    <li className="flex items-center" >
                        <BsCheck/> Acesso aos treinos diários com Nando Tavares
                    </li>
                    <li className="flex items-center">
                        <BsCheck/> Acesso às dietas personalizadas com Jaciara Mendonça
                    </li>
                    <li className="flex items-center">
                        <BsCheck/> Suporte completo via whatsapp
                    </li>
                    <li className="flex items-center">
                        <BsCheck />  Acesso à 2 meses com 15% de desconto em relação ao plano mensal
                    </li>


                </ul>

                <ProceedButton 
                onClick={handlePayment}
                isLoading={isLoading}/>
                <BackButton/>
            </div>
        </div>
    )
}