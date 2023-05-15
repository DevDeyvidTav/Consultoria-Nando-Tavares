import Link from "next/link";
import { BsCheck } from "react-icons/bs";

export function Suport() {
    return (
        <div className="bg-suport h-[80vh] w-full bg-cover bg-no-repeat">
            <div className="w-full h-full bg-gradient">
                <div className="w-4/5 mx-auto  py-5 ">
                    <h2 className="text-3xl font-semibold uppercase">
                        Você Precisa de ajuda?
                    </h2>
                    <div className="flex flex-col mt-5 gap-3 ">
                        <a href="">
                            Deseja falar com nossa equipe?
                        </a>
                        <a href="">
                            Problemas tecnicos?
                        </a>
                        <Link href="/cancelment">
                            Deseja cancelar seu plano mensal?
                        </Link>
                    </div>

                </div>
                <div className="w-full h-20 bg-gradient uppercase grid grid-cols-3 backdrop-blur-sm mt-72">
                    <div className="justify-center  w-full h-full items-center flex text-white">
                       <BsCheck/> suporte diário
                    </div>
                    <div className="border-l-2 border-l-white justify-center w-full h-full items-center flex text-white">
                        <BsCheck/> Método eficaz
                    </div>
                    <div className="border-l-2 border-l-white justify-center w-full h-full items-center flex text-white">
                        <BsCheck/>Compra segura
                    </div>

                </div>
            </div>
        </div>
    )
}