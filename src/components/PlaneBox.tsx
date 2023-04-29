interface PlaneBoxProps {
    emphasis?: boolean
    plane: string
    fidelity: string
    aosDelay?: string
}
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos'


export function PlaneBox({emphasis, plane, fidelity, aosDelay}:PlaneBoxProps){
    useEffect(() => {
        Aos.init({ easing: "ease-out", duration: 300 })
    })
    return(
        
        <div 
        data-aos="fade"
        data-aos-delay={aosDelay}
        className={`${emphasis ? "bg-[#E63940] shadow-2xl shadow-[#E63940] ": "bg-zinc-950"} w-full h-auto text-white py-5  px-10 `}>
            <h3 className="text-xl font-medium uppercase" >{plane}</h3>
            <p className="font-light">{fidelity}</p>
            <div className="flex items-end mt-5">
                <p>
                    R$
                </p>
                <p className="text-4xl pl-1 font-medium">
                    Preço
                </p>
                <p className="pb-2 pl-2">
                    /MÊS
                </p>
            </div>
            <p className="font-light mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur hic dolores excepturi neque, nulla sequi dolorem nam dolore quod repellend.
            </p>
            <button className={`${emphasis? "bg-zinc-950 ": "bg-[#E63940]"} mt-5 py-2 px-4 `}>
                COMPRAR!
            </button>
        </div>
    )
}