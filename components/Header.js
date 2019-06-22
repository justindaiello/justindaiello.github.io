import React from 'react';
import { HeaderStyles, NavStyles } from './styles/HeaderStyles';

const Header = (props) => (
  <HeaderStyles>
    <NavStyles>
      <li onClick={props.toggleHidden}>
        <a>About</a>
      </li>

      <li
        ><a href="#work">Work</a>
      </li>
    </NavStyles>
  </HeaderStyles>
)

export default Header;