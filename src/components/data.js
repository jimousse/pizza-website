import pizzaDoublePP from '../images/pizzas/double-peperoni.jpeg';
import pepsiImg from '../images/drinks/pepsi.jpeg';
import pepsiMaxImg from '../images/drinks/pepsi_max.jpeg';

const pizzaSizes = [ 
    { id: 's', label: '25 cm small' },
    { id: 'm', label: '30 cm medium' },
    { id: 'l', label: '35 cm large' }
];

const drinkSizes = [
    { id: 's', label: '25 cl' },
    { id: 'm', label: '33 cl' },
    { id: 'l', label: '50 cl' }
];

const drinksCategory = {
    label: 'Drinks',
    items: [
        { 
            name: 'Pepsi',
            img: pepsiImg,
            sizes: drinkSizes
        },
        { 
            name: 'Pepsi Max',
            img: pepsiMaxImg,
            sizes: drinkSizes
        }
    ]
};

const meatPizzasCategory = {
    label: 'Vlees',
    items: [
        {
          img: pizzaDoublePP,
          isNew: true,
          name: 'Double Pepperoni',
          sizes: pizzaSizes,
          description: 'Pizzasaus, Mozzarella en Dubbele Pepperoni'
        },
        {
          img: pizzaDoublePP,
          name: 'Super Super Super Spicy Chicken Ranch',
          sizes: [
            ...pizzaSizes,
            { id: 'xl', label: '40 cm xlarge' }
          ],
          description: 'Ranch saus, kaas, gegrilde kip, champignon, verse tomaten, jalapenos, ranchsaus, and more more'
        },
        {
          img: pizzaDoublePP,
          name: 'Spicy Chicken Ranch',
          sizes: pizzaSizes,
          description: 'Ranch saus, kaas, gegrilde kip, champignon, verse tomaten, jalapenos, ranchsaus and moooooooooaaaaaaaar'
        },
        {
          img: pizzaDoublePP,
          name: 'Spicy Chicken Ranch',
          sizes: pizzaSizes,
          description: 'Ranch saus, kaas, gegrilde kip, champignon, verse tomaten, jalapenos, ranchsaus'
        },
        {
          img: pizzaDoublePP,
          name:'Spicy Chicken Ranch',
          sizes: pizzaSizes,
          description: 'Ranch saus, kaas, gegrilde kip, champignon, verse tomaten, jalapenos, ranchsaus'
        }
    ]
};

const pizzas = [
    meatPizzasCategory,
    meatPizzasCategory
];
const drinks = [
    drinksCategory
];

export default {
    pizzas, drinks
};