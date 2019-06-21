import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  offWhite: '#EDEDED',
  black: '#393939',
}

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  html, 
  body {
    height: 100%
  }

  html {
    box-sizing: border-box;
    /* make font base 10 */
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
        </StyledPage>

      </ThemeProvider>
    )
  }
}

export default Page;
