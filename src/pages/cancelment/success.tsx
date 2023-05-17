import { BackButton } from "@/components/BackButton";
import { cancelment } from "@/lib/mercadopago";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServerSideProps {
  id: string;
}

export default function ThankYouPage(props: ServerSideProps) {
  const [error, setError] = useState(false);
  const cancelment_id = props?.id;
  const [alreadyCanceled, setAlreadyCanceled] = useState(false);

  const handleCancelment = async () => {
    setError(false);
    try {
    //   if (!cancelment_id) {
    //     // Verifica se o cancelment_id está definido antes de realizar o cancelamento
    //     setError(true);
    //     return;
    //   }
      
      const response = await cancelment("2c93808487fe911201880205a2e10111");
      if (response === "erro") {
        setError(true);
      } else {
        console.log('cancelou');
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (cancelment_id && !alreadyCanceled) {
      handleCancelment();
      setAlreadyCanceled(true);
    }
  }, [cancelment_id, alreadyCanceled]);

  console.log(cancelment_id);

  return (
    <div className="w-screen h-screen flex  text-white flex-col bg-thanks bg-no-repeat bg-cover items-center justify-center">
      <div className="bg-gradient">
        <div className="w-4/5 h-screen mx-auto text-center pt-32">
          <div>
            {error ? (
              <div>
                Erro no servidor, infelizmente não conseguimos cancelar seu plano, tente novamente mais tarde!
              </div>
            ) : (
              <div>
                <h1 className="text-4xl font-bold  mb-5">Obrigado por utilizar nossos serviços!</h1>
                <p className="text-xl  mb-5 ">
                  Agradecemos a confiança em nossos profissionais especializados em dieta e treino com personal trainer e nutricionista. Lamentamos o cancelamento, mas esperamos que possamos atendê-lo novamente em breve.
                </p>
              </div>
            )}
          </div>
          <BackButton />
          <Image src="/Logo.png" className="mx-auto" width={250} height={300} alt="" />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  const { payment_id } = query;

  // if (!paymentId) {
  //   res.setHeader('Location', '/');
  //   res.statusCode = 302;
  //   res.end();
  //   return {
  //     props: {},
  //   };
  // }

  return {
    props: {
      id: payment_id,
    },
  };
};
