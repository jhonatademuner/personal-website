import Image from "next/image";

import Logo from "@/public/logo.svg";
import Navbar from "@/components/layout/Navbar";
import WorkSetupCard from "@/components/WorkSetupCard";
import PersonalSetupCard from "@/components/PersonalSetupCard";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-w-full">
      <Navbar />
      <section className="flex flex-col min-h-screen pt-52 mx-auto xl:w-[1024px] relative">
        <a href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={48}
            className="absolute top-8 left-4"
          />
        </a>
        <h1 className="text-4xl text-text mx-auto mb-8 font-semibold">Meu <span className="text-accent">Setup</span></h1>
        <div className="flex justify-evenly w-full flex-wrap gap-8">
          <WorkSetupCard />
          <PersonalSetupCard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
