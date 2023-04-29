import { PlaneBox } from "@/components/PlaneBox";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos'


export function Planes() {
    useEffect(() => {
        Aos.init({ easing: "ease-out", duration: 300 })
    })
    return (
        <div
            className="w-full mt-10 h-screen">
            <div className="w-[80%] mx-auto h-full">
                <h2
                    data-aos="fade"
                    className="text-white text-3xl mb-10 mt-10 font-bold uppercase" >Confira nossos planos</h2>
                <div 
                className="flex flex-col md:flex-row gap-5 pb-10">
                    <PlaneBox
                        plane="Plano mensal"
                        fidelity="pode ser cancelado a todo momento" />
                    <PlaneBox
                        plane="Plano bimestral"
                        fidelity="fidelidade de dois meses"
                        emphasis 
                        aosDelay="100"/>
                    <PlaneBox
                        plane="Plano trimestral"
                        fidelity="fidelidade de três meses"
                        aosDelay="200"
                    />
                </div>
            </div>
        </div>
    )
}