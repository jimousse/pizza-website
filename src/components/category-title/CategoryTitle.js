import React from 'react';
import './CategoryTitle.scss';

class CategoryTitle extends React.Component {
  render() {
    return (
      <div className="category-title">
        <span>{this.props.title}</span>
        <hr className="separator" />
      </div>
    );
  }
}

export default CategoryTitle;
