import React from 'react';
import './ArrowIcon.scss';

export default function ArrowIcon (props) {
  return (
    <span>
      {props.direction === 'up' ? '↓' : '↑'}
    </span>
  );
}
