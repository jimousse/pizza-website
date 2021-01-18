import React from 'react';
import './CategoryTitle.scss';

export default function CategoryTitle(props) {
  return (
    <div className="category-title">
      <span>{props.title}</span>
      <hr className="separator" />
    </div>
  );
}