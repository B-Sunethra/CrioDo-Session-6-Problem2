import React from 'react';
import { ReactComponent as LeftArrow } from '../assets/left.svg';

const LeftButton = ({ onClick }) => (
  <button onClick={onClick} style={{ all: 'unset', cursor: 'pointer' }}>
    <LeftArrow />
  </button>
);

export default LeftButton;
