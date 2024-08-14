import React from "react";
import Image from "next/image";
import Photo from "@/../public/photo.jpg";

const AboutSection = () => {
  return (
    <section className="flex flex-col justify-center gap-4 pt-48 text-text w-[78rem]" id="about-section">
      <p className="text-6xl">Hello! I'm Jhonata Demuner👋</p>
      <div className=" text-2xl flex items-center justify-between gap-32">
        <p>
          I am a dedicated{" "}
          <span className="text-accent-3">Software Engineer</span> with strong
          expertise in <span className="text-accent-3">Java</span> and{" "}
          <span className="text-accent-3">Kotlin</span>, complemented by
          experience in{" "}
          <span className="text-accent-3">back-end development</span> and
          related technologies. I am currently pursuing a bachelor's degree in{" "}
          <span className="text-accent">Information Systems</span> at the{" "}
          <span className="text-accent">
            Federal Institute of Espírito Santo (IFES)
          </span>
          , a renowned college in Brazil.
          <br />
          <br />
          In my role as a{" "}
          <span className="text-accent">Back-end Developer</span> at a{" "}
          <span className="text-accent">large-scale company</span>, which is a
          leading global entity in its industry with over{" "}
          <span className="text-accent">
            half a million customers worldwide
          </span>
          , I have gained substantial experience in managing{" "}
          <span className="text-accent">complex workflows</span> and
          contributing to{" "}
          <span className="text-accent-2">impactful projects</span>. This
          experience has equipped me with a robust{" "}
          <span className="text-accent">skill set</span> and a{" "}
          <span className="text-accent">problem-solving mindset</span>, allowing
          me to effectively tackle challenges and drive{" "}
          <span className="text-accent-2">innovation</span>.
          <br />
          <br />
          While my primary focus is{" "}
          <span className="text-accent-3">back-end development</span>, I can
          also handle some simpler{" "}
          <span className="text-accent-3">front-end tasks</span>, just like this
          portfolio. (Though, if I may say so myself, this portfolio is looking
          pretty sharp!)
          <br />
          <br />I am passionate about leveraging my diverse{" "}
          <span className="text-accent">skill set</span> to contribute to{" "}
          <span className="text-accent-2">impactful projects</span> and{" "}
          <span className="text-accent-2">innovative solutions</span>. I am
          committed to further developing my expertise and making significant
          contributions to any{" "}
          <span className="text-accent-2">future projects</span> I undertake.
        </p>
        <div className="flex items-center justify-center h-fit w-fit flex-shrink-0">
          <Image
            // src={Photo}
            src=""
            alt="Jhonata Demuner's Photo"
            width={384}
            height={512}
            className="rounded-[2rem] z-10"
          />
          <div className="w-[36rem] h-[50rem] bg-background-2 blur-[192px] rounded-[100%] absolute"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
