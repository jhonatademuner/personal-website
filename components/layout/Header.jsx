import { GoPerson, GoRepo, GoQuote, GoGear } from "react-icons/go";

function Header() {
  return (
    <nav className="flex items-center justify-center w-fit rounded-full absolute top-0 bottom-0 my-auto -left-8">
      <ul className="flex flex-col justify-around items-center gap-4 text-secondary text-2xl font-semibold">
        <a
          href=""
          className="hover:text-primary hover:border-primary transition-colors duration-200 bg-background p-4 rounded-full border-2 border-secondary"
        >
          <li>
            <GoPerson />
          </li>
        </a>
        <a
          href=""
          className="hover:text-accent hover:border-accent transition-colors duration-200 bg-background p-4 rounded-full border-2 border-secondary"
        >
          <li>
            <GoRepo />
          </li>
        </a>
        <a
          href=""
          className="hover:text-accent hover:border-accent transition-colors duration-200 bg-background p-4 rounded-full border-2 border-secondary"
        >
          <li>
            <GoQuote />
          </li>
        </a>
        <a
          href=""
          className="hover:text-accent hover:border-accent transition-colors duration-200 bg-background p-4 rounded-full border-2 border-secondary"
        >
          <li>
            <GoGear />
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Header;
