import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import Main from './Main';
import Name from './Name';

const theme = {
  offWhite: '#EDEDED',
  black: '#393939',
  lightBlue: '#99C0D1',
  boxShadow: '0 12px 24px 0 rgba(0,0,0,.09)'
}

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.offWhite};
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400&display=swap');
  html, 
  body {
    height: 100vh;
  }

  html {
    box-sizing: border-box;
    /* make font base 10 */
    font-size: 10px;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    /* font-family: 'Source Sans Pro', sans-serif; */
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {

  state = {
    isHidden: true,
  }

  toggleHidden = () => {
    this.setState({ isHidden: !this.state.isHidden })
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header toggleHidden={this.toggleHidden}/>
          <Name isHidden={this.state.isHidden}/>
          <Main />
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;
