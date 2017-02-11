import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers';

import Header from 'components/Header';
import Video from 'components/Video';

import poster from './media/coco-poster.jpg';
import movie from './media/coco.mp4';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>
          This is my example <a href="https://keybase.io/docs/kbfs" target="_blank">Keybase filesystem</a> website.
        </p>
        <p>
          <a href="https://keybase.pub/kaezarrex/" target="_blank">browse source</a>
        </p>
        <p>
          <a href="keybase.txt">site verification</a>
        </p>
        <Video src={movie} poster={poster} />
      </div>
    );
  }
}

