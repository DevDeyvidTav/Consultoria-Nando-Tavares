import Image from "next/image";

interface QuestionBoxProps {
    imageSrc: string;
    question: string;
    bg?: boolean;
}

export function QuestionBox({imageSrc, question, bg}:QuestionBoxProps) {
    return (
        <div 
            className="w-full  text-white mt-16">
            <Image
                src={imageSrc}
                width={100}
                height={100}
                alt="halter" 
                className={`${bg? "bg-[#E63940]" : ""} mx-auto p-2 rounded-lg`}/>
            <h4 
                className="mx-auto w-full text-center mt-3 text-2xl font-semibold">
                {question}
            </h4>
        </div>
    )
}