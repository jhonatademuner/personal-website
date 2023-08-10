import ReactTyped from "react-typed";

function Roles() {
  return (
    <>
      <ReactTyped
        className="text-palette-900 font-bold text-2xl"
        strings={[
          "Software Developer",
          "Full-Stack Developer",
          "Mobile Developer",
        ]}
        typeSpeed={120}
        loop
        backSpeed={20}
        cursorChar="_"
        showCursor={true}
      />
    </>
  );
}

export default Roles;
