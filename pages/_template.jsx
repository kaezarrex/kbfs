import React from 'react';
import {Container} from 'react-responsive-grid';

import Footer from 'components/Footer';
import Header from 'components/Header';
import 'css/styles';

module.exports = React.createClass({
  propTypes() {
    return {children: React.PropTypes.any};
  },
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <Container
          style={{flex: 1, maxWidth: 768, paddingTop: 0, width: '100%'}}
        >
          <Header />
          {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  },
});
