import React from 'react';
import Category from './category/Category';
import './Hello.scss';
import ProductPage from './product-page/ProductPage';


class HelloMessage extends React.Component {
  render() {
    return (
      <div className="category-list">
        <ProductPage />
      </div>
    );
  }
}

export default HelloMessage;
