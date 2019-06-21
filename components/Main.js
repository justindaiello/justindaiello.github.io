import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import ProjectDivStyles from './styles/ProjectDivStyles';

const ParallaxStyles = styled.div`
  background-image: url(https://i.imgur.com/ltjU1dN.jpg);
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`

const projectInfo = [
  {name: 'GoAdventure', desc: 'testing1234', key: 0},
  {name: 'FarmStand', desc: 'site about farms', key: 1},
  {name: 'D&D Character Selector', desc: 'Cool nerd stuff', key: 3}
]

const Main = (props) => (
  <>
  <ParallaxStyles />
    <ProjectDivStyles id="middle">
      {projectInfo.map(project => (
          <ProjectItem project={project} key={project.key}/>
        )
      )}
    </ProjectDivStyles> 
  <ParallaxStyles />
  </>

)

export default Main;