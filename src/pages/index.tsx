import { About } from "@/sections/About";
import { FAQ } from "@/sections/Faq";
import { Header } from "@/sections/Header";
import { HomeMobile } from "@/sections/Home";
import { Planes } from "@/sections/Planes";
import { Testimonials } from "@/sections/Testimonials";

export default function Index() {
  return (
    <main className="w-screen max-w-full">
      <Header/>
      <HomeMobile/>
      <About/>
      <FAQ/>
      <Testimonials/>
      <Planes/>
    </main>
  )
}

