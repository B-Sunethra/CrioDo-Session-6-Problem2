import React from 'react';
import { ReactComponent as RightArrow } from '../assets/right.svg';

const RightButton = ({ onClick }) => (
  <button onClick={onClick} style={{ all: 'unset', cursor: 'pointer' }}>
    <RightArrow />
  </button>
);

export default RightButton;
