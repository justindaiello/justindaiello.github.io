import styled, { keyframes } from 'styled-components';

const showHidden = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const NameStyles = styled.div`
  position: absolute;
  width: 100%;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin-bottom: 2rem;
    font-weight: 200;
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
  }
  h3 {
    font-weight: 200;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: 0;
  }
  ul {
    padding: 0;
    width: 50%;
    list-style-type: none;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    li {
      margin: 0 2rem;
      font-weight: 200;
      font-size: 1.75rem;
      text-transform: uppercase;
    }
    a {
      color: ${props => props.theme.offWhite};
      cursor: pointer;
    }
  }
  h3, 
  ul {
    animation: ${showHidden} 1s linear;
  }
  
`;

export default NameStyles;