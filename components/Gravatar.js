import React from 'react';

const Gravatar = ({hash, size = 200}) => (
  <img
    src={`https://www.gravatar.com/avatar/${hash}?s=${size}&d=mm`}
    style={{height: '3rem', borderRadius: '50%', verticalAlign: 'middle'}}
  />
);

export default Gravatar;

