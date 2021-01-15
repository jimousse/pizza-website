import React from 'react';
import CategoryTitle from '../category-title/CategoryTitle';
import './ProductPage.scss';
import Dropdown from '../base/dropdown/Dropdown';
import CustomButton from '../base/button/CustomButton';
import ProductList from '../product-list/ProductList';
import pizzaDoublePP from '../../images/pizzas/double-peperoni.jpeg';


const list = [ 
  { id: 's', label: '25 cm small' },
  { id: 'm', label: '30 cm medium' },
  { id: 'l', label: '35 cm large' }
];


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
 
function hello(id) {
  console.log(id);
}

class ProductPage extends React.Component {
  render() {
    return (
      <div className="product-page">
        <CategoryTitle title={'Savoureuse Fondue'} />
        <ProductList items={pizzas} />
      </div>
    );
  }
}

export default ProductPage;
