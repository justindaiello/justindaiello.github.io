import React from 'react';
import styled from 'styled-components';

const ParallaxStyles = styled.div`
  background-image: url(https://i.imgur.com/ltjU1dN.jpg);
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`

const TestDiv = styled.div`
  height: 1000px;
  background: red;
`;

const Main = (props) => (
  <>
  <ParallaxStyles />
    <TestDiv className="middle">hi</TestDiv> 
  <ParallaxStyles />
  </>

)

export default Main;