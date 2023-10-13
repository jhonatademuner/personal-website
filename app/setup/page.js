import Navbar from "@/components/layout/Navbar";
import WorkSetupCard from "@/components/WorkSetupCard";
import PersonalSetupCard from "@/components/PersonalSetupCard";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-w-full">
      <Navbar />
      <section className="flex flex-col items-center min-h-screen pt-52 mx-auto xl:w-[1024px]">
        <h1 className="text-4xl text-text mb-8 font-semibold">Meu <span className="text-accent">Setup</span></h1>
        <div className="flex flex-col lg:flex-row justify-evenly w-full flex-wrap gap-8">
          <WorkSetupCard />
          <PersonalSetupCard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
