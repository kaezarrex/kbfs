import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers';

import {config} from 'config';
import Gravatar from 'components/Gravatar';

const style = {textDecoration: 'none'};

const Header = () => (
  <Link to={prefixLink('/')} style={style}>
    <h1>
      <Gravatar hash={config.gravatarHash} />
      <span style={{verticalAlign: 'middle'}}> kaezarrex</span>
    </h1>
  </Link>
);

export default Header;

