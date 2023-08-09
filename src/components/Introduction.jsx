import Roles from "./Roles";

function Introduction() {
  return (
    <>
      <div>
        <h1 className="text-md font-bold text-center">Hello, I&apos;m</h1>
        <p className="text-4xl font-bold">
          <span className="text-palette-700">Jhonata</span> Polito
        </p>
        <h2 className="text-md">
          I&apos;m a <Roles />
        </h2>
      </div>
    </>
  );
}

export default Introduction;
