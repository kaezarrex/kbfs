import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers';

import Video from 'components/Video';

import poster from 'media/coco-poster.jpg';
import movie from 'media/coco.mp4';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <p>
          This is my example <a href="https://keybase.io/docs/kbfs" target="_blank">Keybase filesystem</a> website.
          It's a static site generated with <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>,
          and made of a combination of HTML, JSX and Markdown.
        </p>
        <p>
          <a href="https://keybase.pub/kaezarrex/" target="_blank">browse source</a>
        </p>
        <p>
          <a href="keybase.txt">site verification</a>
        </p>
        <p>
          <Link to={prefixLink('/markdown/')}>markdown example</Link>
        </p>
        <Video src={movie} poster={poster} />
      </div>
    );
  }
}

