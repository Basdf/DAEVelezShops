import React from 'react';
import './App.css';
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import BodyGrid from './components/grid/Grid'
import { useSelector } from 'react-redux';
export default function App() {
  const state = useSelector(state => state)
  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <BodyGrid response={state}></BodyGrid>
    </>
  );

}

