import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import SearchBar from './components/searchBar/SearchBar';
import Header from './components/header/Header';
import ProductGrid from './components/grid/ProductGrid';


export default function App() {
  return (
    <>

      <BrowserRouter>
        <Header></Header>
        <SearchBar></SearchBar>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/product/:id" component={ProductGrid}></Route>
          <Route component={Home}>
            <Redirect to="/home" />
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );

}

