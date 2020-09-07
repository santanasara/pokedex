import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Home/Header';
import SearchBox from './components/Home/SearchBox';
import PokemonList from './components/Home/List';

const root = document.getElementById('root');
const App = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <PokemonList />
    </div>
  );
};
ReactDom.render(<App />, root);
