import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projects.json";
import "../styles/_portfolioSection.scss";

const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item);
};

const PortfolioSection = () => {
  const [shuffledProjects, setShuffledProjects] = useState([]);

  useEffect(() => {
    setShuffledProjects(shuffleArray(projectsData));
  }, []);

  return (
    <section className="portfolio-section">
      <div className="grid-container">
        {shuffledProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
