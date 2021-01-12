import React from 'react';
import ProductCard from '../product-card/ProductCard';
import './ProductList.scss';

class ProductList extends React.Component {
  render() {
    return (
      <div className="item-list">
        {this.props.items.map((item, i) =>
          <div key={i} className="item">
            <ProductCard
              image={item.img}
              name= {item.name}
              isNew= {item.isNew}
              description= {item.description}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;
