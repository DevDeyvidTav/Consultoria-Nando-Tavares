import { About } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HomeMobile } from "@/sections/Home";

export default function Index() {
  return (
    <main className="w-screen max-w-full">
      <Header/>
      <HomeMobile/>
      <About/>
    </main>
  )
}
