import Card from "./Card";

function Projects() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Card
          image="./src/assets/sort_comparison.png"
          title="Sort Comparison"
          subtitle="Web Application"
          description="I developed this website to propose a friendly and didactic visualization of list sorting using different algorithms. I implemented the algorithms in a way that allows two selected algorithms to run simultaneously, enabling users to visually perceive the differences in their functioning."
          techs={["HTML", "CSS", "JavaScript"]}
          repo="https://github.com/jhonataplt/sort-comparison"
          link="https://jhonataplt.github.io/sort-comparison/"
        />
        <Card
          image="./src/assets/localif.png"
          title="Localif"
          subtitle="Mobile Application"
          description="LocalIf ​​is an image recognition application specifically designed for IFES Campus Serra. With a comprehensive database, the program stores information about the various locations in the campus. Using two feature extractors, LocalIf ​​analyzes the photos sent by the user and determines the corresponding location. Its also have a pathfinder feature, which allows the user to find the shortest path between two locations."
          techs={[
            "Kotlin",
            "Java",
            "Android Studio",
            "C",
            "C++",
            "Python",
            "CMake",
          ]}
          repo="https://github.com/jhonataplt/localif"
        />
      </div>
    </>
  );
}

export default Projects;
