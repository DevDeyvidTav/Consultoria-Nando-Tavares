import { TestimonialBox } from "@/components/Testimonial";

export function Testimonials() {
    return (
        <div 
        id="testimonials"
        className="w-full h-[100vh] ">
            <div className="w-[90%] py-10 mx-auto">
                <h2 className="text-white uppercase w-full mb-10 text-center text-3xl font-semibold">
                    Veja a opinião de quem aprova:
                </h2>
                <div className="flex flex-col gap-5">
                    <TestimonialBox/>
                    <TestimonialBox/>
                </div>
            </div>
        </div>
    )
}