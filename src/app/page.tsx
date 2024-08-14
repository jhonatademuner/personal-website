import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import WorkSection from "@/components/WorkSection";


export default function Home() {

  // const lightRadius = 500;
  // const flashlightOffset = lightRadius / 2;
  // const flashlight = document.querySelector('.flashlight');

  // const blurFilter = document.querySelector('#blur-filter feGaussianBlur');

  // const filterIntensity = 100;
  // blurFilter?.setAttribute('stdDeviation', filterIntensity.toString());

  // const followMouseFlashlight = ({ clientX, clientY }) => {
  //   const { left, top } = illuminatedItem.getBoundingClientRect();
  //   flashlight?.style.left = `${clientX - left - flashlightOffset}px`;
  //   flashlight?.style.top = `${clientY - top - flashlightOffset}px`;
  // };

  return (
    // <main className="flex min-h-screen w-full flex-col items-center " onMouseMove={followMouseFlashlight}>
      <main className="flex min-h-screen w-full flex-col items-center ">
      {/* <span className="flashlight"></span> */}
      {/* <svg><defs><filter id="blur-filter"><feGaussianBlur/></filter></defs></svg> */}
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ProjectSection />
      <Footer />
    </main>
  );
}
