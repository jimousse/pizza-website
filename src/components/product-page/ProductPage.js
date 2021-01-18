import React from 'react';
import Category from '../category/Category';
import './ProductPage.scss';

export default function ProductPage(props) {
  return (
    <div className="product-page">
      {props.categories.map(({ label, items }, key) => {
        return <Category key={key} title={label} items={items} />;
      })}
    </div>
  );
}