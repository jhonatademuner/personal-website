import Image from "next/image";

import Logo from "@/public/logo.svg";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-w-full ">
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
        <div className="flex flex-col justify-center items-center h-[40rem] w-full gap-4">
          <p className="text-6xl text-text font-bold">BLOG</p>
          <p className="text-4xl text-accent font-bold">NOTHING HERE, COME BACK LATER...</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
