import styled from 'styled-components';

const ProjectDivStyles = styled.div`
  height: 400px;
  background: ${props => props.theme.offWhite};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  .project-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${props => props.theme.black}
  }
`;

export default ProjectDivStyles;