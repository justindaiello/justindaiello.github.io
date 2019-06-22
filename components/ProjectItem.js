import React from 'react';
// import styled from 'styled-components';

const ProjectItem = (props) => (
  <div className="project-item" key={props.project.key} id={props.project.id}>
    <h1>{props.project.name}</h1>
    <a>
      <img src={props.project.image} alt={props.project.name} />
    </a>
    <h2>{props.project.desc}</h2>
  </div>
)

export default ProjectItem;