import React from 'react';

const ref = el => el && el.addEventListener('click', () => el.play(), false);

export default class Video extends React.Component {
  render() {
    const {src, poster} = this.props;
    return (
      <div>
        <video
          preload="auto"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          poster={poster}
          style={
            {
              maxWidth: '100%',
              borderRadius: 5,
              margin: '2rem auto',
              display: 'block',
            }
          }
          ref={ref}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }
}

