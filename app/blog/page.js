import Navbar from "@/components/layout/Navbar";
import Posts from "@/components/Posts";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-w-full ">
      <Navbar />
      <section className="flex flex-col items-center min-h-screen pt-52 mx-auto xl:w-[1024px]">
        <div className="flex flex-col h-full w-[40rem] shrink-0 pr-6 gap-8">
          <Posts />
        </div>
      </section>
      <Footer />
    </main>
  );
}
