import React from 'react';
import Home from '../Home';
import InfiniteList from '../InfiniteList';
import LazyImage from '../LazyImage';
import GlobalStyle from '../../components/GlobalStyle';
import NavigationBar from '../../components/NavigationBar';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route path="/infinite-list" component={InfiniteList} />
      <Route path="/lazy-image" component={LazyImage} />
    </BrowserRouter>
  );
};

export default App;
