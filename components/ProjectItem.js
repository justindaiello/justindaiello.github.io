import React from 'react';
// import styled from 'styled-components';

const ProjectItem = (props) => (
  <div className="project-item" key={props.project.key}>
    <h1>{props.project.name}</h1>
    <h2>{props.project.desc}</h2>
  </div>
)

export default ProjectItem;