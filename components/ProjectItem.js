import React from 'react';
// import styled from 'styled-components';

const ProjectItem = ({ project }) => (
  <div className="project-item" key={project.key} id={project.id}>
    <h1>{project.name}</h1>
    <div>
    <a href={project.gitHub}
       rel="noopener noreferrer"
       target="_blank">
       GitHub
    </a>

    <a href={project.url}
       rel="noopener nofererrer"
       target="_blank">
       Live Site
    </a>
    </div>
    <a href={project.url}
       rel="noopener noreferrer"
       target="_blank">
      <img src={project.image} alt={project.name} />
    </a>
    <h2>{project.desc}</h2>
  </div>
)

export default ProjectItem;