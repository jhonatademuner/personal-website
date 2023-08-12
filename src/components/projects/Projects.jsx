import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "./Card";
// import SortComparisonImg from "/src/assets/sort_comparison.png";
// import LocalifImg from "/src/assets/localif.png";

function Projects() {
  const username = "jhonataplt";
  const tag = "project";

  const [userProjects, setUserProjects] = useState([]);

  const getUserRepos = useCallback(async (username) => {
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    try {
      const response = await axios.get(apiUrl);
      const repos = response.data.map((repo) => repo.name);
      return repos;
    } catch (error) {
      throw new Error(
        error.response?.data.message || "Failed to fetch the user public REPOS"
      );
    }
  }, []);

  const getRepoTags = useCallback(async (username, repo) => {
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/tags`;

    try {
      const response = await axios.get(apiUrl);
      const tags = response.data;
      const repoTags = tags.map((tag) => tag.name);
      return repoTags;
    } catch (error) {
      throw new Error(
        error.response?.data.message || `Failed to fetch the ${repo} tags`
      );
    }
  }, []);

  const getUserProjectsRepos = useCallback(
    async (username, tag) => {
      try {
        const repos = await getUserRepos(username);

        const projects = await Promise.all(
          repos.map(async (repo) => {
            const repoTags = await getRepoTags(username, repo);
            if (repoTags.includes(tag)) {
              return repo;
            }
          })
        );

        return projects.filter((project) => project !== undefined);
      } catch (error) {
        console.error("An error occurred:", error);
        return [];
      }
    },
    [getUserRepos, getRepoTags]
  );

  const getProjectInfo = useCallback(async (username, project) => {
    const repo = project;

    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repo}`
    );
    if (response.status === 200) {
      const data = response.data;

      // Fetch README content
      const readmeResponse = await axios.get(
        `https://raw.githubusercontent.com/${username}/${repo}/main/README.md`
      );
      var readmeContent = readmeResponse.data.split("\n");
      readmeContent = readmeContent.map((line) => line.trim()); // Remove \r from each line
      const title = readmeContent[0].replace("# ", "");
      const subtitle = readmeContent[1].replace("## ", "");
      const description = readmeContent[3];

      // Fetch languages
      const languagesResponse = await axios.get(data.languages_url);
      const languages = Object.keys(languagesResponse.data);

      // Construct the repo info object
      const repoInfoObject = {
        previewImage: `https://github.com/${username}/${repo}/blob/main/preview_image.png?raw=true`,
        title: title,
        subtitle: subtitle,
        description: description,
        languages: languages,
        repoLink: data.html_url,
        pagesLink: data.homepage,
      };
      return repoInfoObject;
    } else {
      console.error("Repository not found or API request failed.");
    }
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projects = await getUserProjectsRepos(username, tag);

        const projectsInfo = await Promise.all(
          projects.map(async (project) => {
            const card = await getProjectInfo(username, project);
            return card;
          })
        );

        setUserProjects(projectsInfo.filter(Boolean));
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchProjects();
  }, [username, tag, getUserProjectsRepos, getProjectInfo]);

  return (
    <>
      <div className="flex flex-wrap items-center w-full gap-8 lg:gap-16 xl:gap-28 justify-center max-w-[1440px]">
        {userProjects.map((card) => (
          <Card
            key={card.title}
            image={card.previewImage}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            techs={card.languages}
            repo={card.repoLink}
            link={card.pagesLink}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
