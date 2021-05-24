import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/layouts/Home';
import NewsPost from './components/layouts/NewsPost';
import StockList from './components/layouts/StockList';
import Stock from './components/layouts/Stock';
import Chart from './components/Chart';
import Flask from './components/layouts/Flask'
import Article from './components/layouts/article'

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/NewsPost" component={NewsPost}/>
        <Route path="/StockList" component={StockList}/>
        <Route path="/Stock" component={Stock}/>
        <Route path="/Chart" component={Chart}/>
        <Route path="/Flask" component={Flask}/>
        <Route path="/Article" component={Article}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

