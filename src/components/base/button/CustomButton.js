import React, { useState } from 'react';
import './CustomButton.scss';

export default function CustomButton(props) { 

  const classNames = [ 'base' ];
  if (props.isActive) {
    classNames.push('active');
  }

  return (
    <button 
      style={{
        width: props.horizontalExtend ? '100%' : null
      }}
      onClick={props.onClick}
      className={classNames.join('  ')}
    >
      <span 
        style={{ backgroundColor: props.backgroundColor }}
        className="beforeElement"
      />
      {props.children}
    </button>
  );
}