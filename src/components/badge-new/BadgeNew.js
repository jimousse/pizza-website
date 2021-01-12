import React from 'react';
import './BadgeNew.scss';
const WORD = 'NEW';

class BadgeNew extends React.Component {
  render() {
    return (
      <div className="badge-new">
        {WORD}
      </div>
    );
  }
}

export default BadgeNew;
