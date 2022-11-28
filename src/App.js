// import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog.jsx';
import Home from './pages/Home/Home.jsx';
// import axios from "axios";

const App = () => {
  // const fetchNews = async () => {
  //   const { data } = await axios.get(
  //     `https://newsapi.org/v2/everything?q=apple&from=2022-11-27&to=2022-11-27&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
  //   );
  //   // setContent(data.results);
  //   console.log(data);
  //   data.articles.map((article, i) => (
  //     console.log(article.author)
  //   ));
  // };

  // useEffect(() => {
  //   fetchNews();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;