import React from 'react';
import Category from './category/Category';
import pizzaDoublePP from '../images/pizzas/double-peperoni.jpeg';
import './Hello.scss';
import ProductPage from './product-page/ProductPage';

const pizzas = [
  {
    img: pizzaDoublePP,
    isNew: true,
    name: 'Double Pepperoni',
    description: 'Pizzasaus, Mozzarella en Dubbele Pepperoni'
  },
  {
    img: pizzaDoublePP,
    name: 'Super Super Super Spicy Chicken Ranch',
    description: 'Ranch saus, kaas, gegrilde kip, champignon, verse tomaten, jalapenos, ranchsaus, and more more'
  },
  {
    img: pizzaDoublePP,
    name: 'Spicy Chicken Ranch',
    description: 'Ranch saus, kaas, gegrilde kip, champignon, verse tomaten, jalapenos, ranchsaus and moooooooooaaaaaaaar'
  },
  {
    img: pizzaDoublePP,
    name: 'Spicy Chicken Ranch',
    description: 'Ranch saus, kaas, gegrilde kip, champignon, verse tomaten, jalapenos, ranchsaus'
  },
  {
    img: pizzaDoublePP,
    name: 'Spicy Chicken Ranch',
    description: 'Ranch saus, kaas, gegrilde kip, champignon, verse tomaten, jalapenos, ranchsaus'
  }
];

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
