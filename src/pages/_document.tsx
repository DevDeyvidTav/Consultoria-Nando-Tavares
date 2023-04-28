import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Oferecemos serviços de consultoria em personal training e nutrição para ajudá-lo a alcançar seus objetivos de fitness e saúde. Nossos especialistas altamente qualificados estão prontos para ajudá-lo a atingir seus objetivos de forma eficiente e sustentável. Entre em contato conosco agora para agendar sua primeira consulta."/> 
        <title>Nando Tavares Consultoria</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body className='bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
