import React, { Component } from 'react';
import ProductList from './components/ProductList';
import { Route, Switch } from "react-router";
import { Link } from 'react-router-dom'
import Product from './components/Product';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-content">
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
