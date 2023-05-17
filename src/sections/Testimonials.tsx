import { TestimonialBox } from "@/components/Testimonial";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos'


export function Testimonials() {
    useEffect(() => {
        Aos.init({ easing: "ease-out", duration: 300 })
    })
    return (
        <div 
        id="testimonials"
        className="w-full h-auto ">
            <div className="w-[90%] md:w-[1140px] py-10 mx-auto">
                <h2 
                data-aos="fade"
                className="text-white uppercase w-full mb-10 text-center text-3xl font-semibold">
                    Veja a opinião de quem aprova:
                </h2>
                <div 
                data-aos="fade"
                className="flex flex-col gap-5 text-white">
                    <TestimonialBox/>
                    <TestimonialBox/>
                </div>
            </div>
        </div>
    )
}