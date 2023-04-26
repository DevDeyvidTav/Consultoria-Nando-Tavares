import { QuestionBox } from "@/components/QuestionsBox";
import Image from "next/image";


export function About() {
    return (
        <div className="w-full h-screen">
            <div className="w-full h-full mt-24">
                <div
                    className="w-[70%] mx-auto">
                    <QuestionBox
                        imageSrc="/black-halter.png"
                        question="QUER GANHAR MASSA?"
                        bg />
                    <QuestionBox
                        imageSrc="/body.png"
                        question="QUER EMAGRECER?"
                        bg />
                    <QuestionBox
                        imageSrc="/help.png"
                        question="PRECISA DE AJUDA ESPECIALIZADA?" 
                        bg/>
                    <h2 className="text-white w-full text-center text-2xl font-bold mt-24">
                        TEMOS EXATAMENTE O QUE VOCÊ PRECISA!
                    </h2>
                    <p className="text-zinc-400 mt-4">
                        Com profissionais altamente qualificados e experientes
                         faremos você a construir o shape que você tanto deseja.
                    </p>
                    <Image 
                    className="mx-auto rounded-lg mt-10"
                    src="/NandoTavares.png"
                    width={350}
                    height={500} 
                    quality={90}
                    alt="Nando tavares"  />
                    <h3 className="text-[#E63940] font-bold mt-5 ">NANDO TAVARES</h3>
                    <p className="text-white pb-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur tenetur, modi nostrum exercitationem quam id aspernatur cumque veritatis, aliquam ea libero, expedita saepe quae nihil commodi non alias. Quidem, distinctio.
                    </p>
                    <Image 
                    className="mx-auto rounded-lg mt-10"
                    src="/Jaciara.png"
                    width={350}
                    height={500} 
                    quality={90}
                    alt="Jaciara Mendonça"  />
                    <h3 className="text-[#E63940] font-bold mt-5 ">JACIARA MENDONÇA</h3>
                    <p className="text-white pb-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur tenetur, modi nostrum exercitationem quam id aspernatur cumque veritatis, aliquam ea libero, expedita saepe quae nihil commodi non alias. Quidem, distinctio.
                    </p>
                </div>
            </div>
        </div>
    )
}