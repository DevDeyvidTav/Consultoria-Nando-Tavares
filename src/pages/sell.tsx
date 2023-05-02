
import { stripe } from "@/lib/stripe"
import axios from "axios"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useState } from "react"
import Stripe from "stripe"

interface  SellProps{
    products: {
        id: string,
        name: string,
        price: number ,
        description: string
        price_id: string
    }[]
}

export default function Sell({products} : SellProps){ 
    const [isLoading, setIsLoading] = useState(false)
    async function getCheckout(price_id: string) {
        setIsLoading(true)
        try {
          const response = await axios.post('/api/checkout', { price_id: price_id });
          const { checkout_url } = response.data;
          window.location.href = checkout_url
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
                    {
                        products.map((product, i) => {
                            return(
                                <div 
                                key={i}
                                className="w-full h-56 px-10 py-5 flex flex-col bg-zinc-950">
                                    <h3 className="text-white w-full text-start  uppercase font-medium text-xl">
                                        {product.name}
                                    </h3>
                                    <p className="text-start text-white font-light mt-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ducimus excepturi quas quidem praesentium aliquid odit .
                                    </p>
                                    <button 
                                    disabled={isLoading}
                                    onClick={() => getCheckout(product.price_id)}
                                    className="bg-[#E63940] w-40 mt-5 py-1 text-white">
                                        {isLoading? "CARREGANDO..." : "SELECIONAR"!}
                                    </button>
                                </div>
                            )
                        })
                    }

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



export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })
    const products = response.data.map((prod) => {
        const price = prod.default_price ? prod.default_price as Stripe.Price : null;
        return {
          id: prod.id,
          name: prod.name,
          price: price ? price.unit_amount : null,
          description: prod.description,
          price_id: price?.id,
        };
      });
    return {
        props: {
            products,
        }
    }
}