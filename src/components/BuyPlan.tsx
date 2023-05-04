interface BuyPlanProps {
    onclick: () => void;
    isLoading: boolean;
    price: number;
    duration: string;
    description: string;
    name: string;
  }


export function BuyPlan({onclick, isLoading, price, duration, description, name}: BuyPlanProps){
    return(
        <div className="w-full h-56 text-white py-5 text-start bg-zinc-950 uppercase px-10">
            <h3 className="text-xl">
                {name}
            </h3>
            <p className="mt-2">
                R$
                 <span className="text-3xl">
                    {price}
                 </span>
                 <span className="">
                 / {duration}
                 </span>
            </p>
            <p className="mt-2">
                {description}
            </p>
            <button 
            disabled={isLoading}
            onClick={onclick}
            className="uppercase mt-2 bg-[#E63940] w-32 py-1">
                {isLoading ? "Carregando..." : "Selecionar"}
            </button>
        </div>
    )
}