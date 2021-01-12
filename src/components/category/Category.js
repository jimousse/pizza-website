import React from 'react';
import ProductList from '../product-list/ProductList';
import CategoryTitle from '../category-title/CategoryTitle';

import './Category.scss';

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <CategoryTitle title={this.props.title}/>
        <ProductList items={this.props.items} />
      </div>
    );
  }
}

export default Category;
