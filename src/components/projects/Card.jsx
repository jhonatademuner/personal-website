import PropTypes from "prop-types";

function Card({ image, title, subtitle, description, techs, repo, link }) {
  return (
    <>
      <div className="flex flex-col bg-palette-100 border-2 border-palette-300 shadow-palette-300 shadow-md rounded-md overflow-hidden w-[23rem]">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="flex flex-col p-6 gap-4">
          <div>
            <h3 className="text-xl font-bold text-left">{title}</h3>
            <h4 className="text-lg font-semibold text-left text-palette-500">
              {subtitle}
            </h4>
          </div>
          <p className="text-left h-72">{description}</p>
          <div className="flex flex-wrap gap-2 h-16">
            <p className="font-semibold text-lg">Techs: </p>
            {techs.map((tech, index) => (
              <span
                key={index}
                className="bg-palette-700 px-2 rounded-2xl flex h-7 items-center font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center border-2 border-palette-700 py-1 px-2 rounded-xl text-palette-700 font-semibold hover:bg-palette-700 hover:text-palette-100"
            >
              Source Code
            </a>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center border-2 border-palette-700 py-1 px-2 rounded-xl text-palette-700 font-semibold hover:bg-palette-700 hover:text-palette-100"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  repo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
