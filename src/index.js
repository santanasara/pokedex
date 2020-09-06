import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Home/Header';
import SearchBox from './components/Home/SearchBox';
import PokemonCard from './components/Home/List/PokemonCard';

const root = document.getElementById('root');
const App = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <PokemonCard />
    </div>
  );
};
ReactDom.render(<App />, root);
