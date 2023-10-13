import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import Subscription from "@/components/Subscription";
import Footer from "@/components/layout/Footer";

export default function Home() {

  return (
    <main className="flex flex-col min-w-full">
      <Navbar />
      <section className="flex flex-col min-h-screen pt-52 mx-auto xl:w-[1024px] relative">
        <Hero />
        <div className="flex justify-between w-full my-16">
          <div className="flex flex-col h-full w-[40rem] shrink-0 pr-6 gap-8">
           <Posts nPosts={3}/>
          </div>
          <div className="flex">
            <Subscription />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
