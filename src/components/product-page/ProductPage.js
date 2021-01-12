import React from 'react';
import CategoryTitle from '../category-title/CategoryTitle';
import './ProductPage.scss';
import Dropdown from '../base/dropdown/Dropdown';

class ProductPage extends React.Component {
  render() {
    return (
      <div className="product-page">
        <CategoryTitle title={'Savoureuse Fondue'} />
        <Dropdown />
      </div>
    );
  }
}

export default ProductPage;
