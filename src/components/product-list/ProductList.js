import React from 'react';
import ProductCard from '../product-card/ProductCard';
import './ProductList.scss';

function ProductList(props) {
  return (
    <div className="item-list">
      {props.items.map((item, i) =>
        <div key={i} className="item">
          <ProductCard
            image={item.img}
            name= {item.name}
            isNew= {item.isNew}
            sizes= {item.sizes}
            description= {item.description}
          />
        </div>
      )}
    </div>
  );
}

export default ProductList;
