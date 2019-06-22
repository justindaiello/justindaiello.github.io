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
  {
    name: 'GoAdventure', 
    desc: 'Full Stack JS app using React/Node/GraphQL.', 
    image: 'https://i.imgur.com/hb8EMA5.png',
    url: '',
    key: 0, 
    id: "one",
  },
  {
    name: 'FarmStand', 
    desc: 'Full Stack JS app using EJS/Node/MongoDB.', 
    image: 'https://i.imgur.com/gN4pEsc.png',
    url: '',
    key: 1, 
    id: "two",
  },
  {
    name: 'D&D Character Selector', 
    desc: 'D&D Character Generator using jQuery and open4e API.', 
    image: 'https://i.imgur.com/gN4pEsc.png',
    url: '',
    key: 3, 
    id: "three",
  }
]

const Main = (props) => (
  <>
  <ParallaxStyles />
    <ProjectDivStyles id="work">
      {projectInfo.map(project => (
          <ProjectItem project={project} key={project.key} id={project.id}/>
        )
      )}
    </ProjectDivStyles> 
  {/* <ParallaxStyles /> */}
  </>

)

export default Main;