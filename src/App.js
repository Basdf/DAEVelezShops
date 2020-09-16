import React from 'react';
import './App.css';
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import BodyGrid from './components/grid/Grid'
export default function App() {
  
  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <BodyGrid></BodyGrid>
    </>
  );

}

