import Image from "next/image";
import Localif from "@/public/images/localif.png";
import SortComparison from "@/public/images/sort-comparison.png";

import Logo from "@/public/logo.svg";
import Navbar from "@/components/layout/Navbar";
import WorkCard from "@/components/WorkCard";
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
        <div className="flex justify-evenly w-full flex-wrap gap-16">
          <WorkCard
            isAndroid={true}
            isWeb={true}
            img={Localif}
            title={"Localif"}
            subtitle={" App Android de Reconhecimento de Imagens"}
            description={
              "LocalIf é um app de reconhecimento de imagem para o IFES Campus Serra, com amplo banco de dados de locais. Analisa fotos do usuário, identificando locais, e oferece busca de trajetos entre eles."
            }
            techs={["Kotlin", "C", "C++", "Python", "CMake"]}
            repo="https://github.com/jhonataplt/localif"
            download={
              "https://drive.google.com/file/d/1F_ip5eVP2huJprgRNnysRlwoz8d12-34/view?usp=sharing"
            }
          />
          <WorkCard
            isWeb={true}
            img={SortComparison}
            title={"Sort Comparison"}
            subtitle={"Web app Didático"}
            description={
              "Site criado para visualização amigável e didática de ordenação de listas com diversos algoritmos. Permite rodar dois algoritmos selecionados simultaneamente, facilitando a comparação visual de seus funcionamentos."
            }
            techs={["HTML", "CSS", "JavaScript"]}
            repo="https://github.com/jhonataplt/localif"
            link={"https://jhonataplt.github.io/sort-comparison/"}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
