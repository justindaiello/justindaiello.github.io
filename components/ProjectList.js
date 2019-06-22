import React from 'react';
import ParallaxStyles from './styles/ParallaxStyles';
import ProjectItem from './ProjectItem';
import ProjectDivStyles from './styles/ProjectDivStyles';

const projectInfo = [
  {
    name: 'GoAdventure', 
    desc: 'Full Stack JS app using React/Node/GraphQL.', 
    image: 'https://i.imgur.com/hb8EMA5.png',
    url: 'https://goadventure-next-prod.herokuapp.com/',
    gitHub: 'https://github.com/justindaiello/react_store',
    key: 0, 
    id: "one",
  },
  {
    name: 'FarmStand', 
    desc: 'Full Stack JS app using EJS/Node/MongoDB.', 
    image: 'https://i.imgur.com/gN4pEsc.png',
    url: 'https://the-farm-stand.herokuapp.com/',
    gitHub: 'https://github.com/justindaiello/farmstand',
    key: 1, 
    id: "two",
  },
  {
    name: 'D&D Character Selector', 
    desc: 'D&D Character Generator using jQuery and open4e API.', 
    image: 'https://i.imgur.com/gN4pEsc.png',
    url: 'https://github.com/justindaiello/d_and_d_generator',
    gitHub: 'https://github.com/justindaiello/d_and_d_generator',
    key: 3, 
    id: "three",
  }
]

const Main = () => (
  <>
  <ParallaxStyles />
    <ProjectDivStyles id="work">
      {projectInfo.map(project => (
          <ProjectItem project={project} key={project.key} id={project.id}/>
        )
      )}
    </ProjectDivStyles> 
  </>

)

export default Main;