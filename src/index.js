import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Home/Header';

const root = document.getElementById('root');
const App = () => {
  return <Header />;
};
ReactDom.render(<App />, root);
