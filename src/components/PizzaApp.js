import React from 'react';
import './PizzaApp.scss';
import ProductPage from './product-page/ProductPage';
import NavigationBar from './navigation-bar/NavigationBar';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import data from './data';
const routes = [
  {
    path: "/",
    exact: true,
    label: "🍕 Mousse Pizzas 🍕",
    main: () => <div className="content">🍕 Under construction... 🍕</div>
  },
  {
    path: "/pizzas",
    label: "Pizzas",
    main: () => <div className="content"><ProductPage categories={data.pizzas} /></div>
  },
  {
    path: "/drinks",
    label: "Drinks",
    main: () => <div className="content"><ProductPage categories={data.drinks} /></div>  }
];

export default function HelloMessage() {
  return (
    <BrowserRouter>
      <div id="app">
        <NavigationBar routes={routes} />
        <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
      </div>
    </BrowserRouter>
  );
}
