import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={isHovered ? project.gif : project.image}
        alt="Project Preview"
        className="project-image"
      />
      <motion.div
        className="tags"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
