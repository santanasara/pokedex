import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Home/Header';
import SearchBox from './components/Home/SearchBox';

const root = document.getElementById('root');
const App = () => {
  return (
    <div>
      <Header />
      <SearchBox />
    </div>
  );
};
ReactDom.render(<App />, root);
