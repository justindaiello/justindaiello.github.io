import styled from 'styled-components';

const ProjectDivStyles = styled.div`
  #one { background: #96C0CE; }
  #two { background: #BEB9B5; }
  #three { background: #C25B56; }
  height: 400px;
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  background: ${props => props.theme.black};
  box-shadow: ${props => props.theme.boxShadow};
  .project-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${props => props.theme.black};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 3px;
    h1 {
      margin: 1rem 0;
      font-size: 3rem;
      font-weight: 200;
    }
    a {
      width: 100%;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
    img {
      width: 90%;
      margin: 0;
      height: 150px;
      object-fit: cover;
      border: 1px solid ${props => props.theme.black};
      border-radius: 2px;
      box-shadow: ${props => props.theme.boxShadow};
      &:hover {
        transform: scale(1.1);
        transition: all .7s;
        border: .5px solid ${props => props.theme.offWhite};
      }
    }
    h2 {
      padding: 0 .35rem;
      text-align: center;
      font-size: 1.75rem;
      font-weight: 200;

    }
    div {
      padding-bottom: 1rem;
      width: 60%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
    @media (max-width: 700px) {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export default ProjectDivStyles;