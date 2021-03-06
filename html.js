import React from 'react';

import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  propTypes() {
    return {body: React.PropTypes.string};
  },
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css'),
          }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{config.siteTitle}</title>
          {css}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{__html: this.props.body}}
            style={{height: '100%'}}
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  },
});
