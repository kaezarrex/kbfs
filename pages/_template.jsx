import React from 'react';
import {Container} from 'react-responsive-grid';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers';

import Footer from 'components/Footer';
import '../css/styles';

module.exports = React.createClass({
  propTypes() {
    return {children: React.PropTypes.any};
  },
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <Container style={{flex: 1, maxWidth: 960, paddingTop: 0}}>
          {this.props.children}
        </Container>
          <Footer />
      </div>
    );
  },
});

