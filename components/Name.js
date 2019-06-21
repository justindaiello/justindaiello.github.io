import React from 'react';
import NameStyles from './styles/NameStyles';
import AboutInfo from './AboutInfo';

const Name = (props) => (
  <NameStyles>
    <h2>Justin Aiello</h2>
    {!props.isHidden && <AboutInfo /> }
  </NameStyles>
)

export default Name