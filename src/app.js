import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Status from './components/status';
// import Votes from './components/vote-counter';
import Footer from './components/footer/';
import Header from './components/header/';
import Categories from './components/categories/';
import Products from './components/products/';
import SimpleCart  from './components/cart/';





function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path='/'>
          <main >
            <Categories />
            <Products />
          </main>
        </Route>
        <Route exact path='/cart'>
          <main>
            <SimpleCart />
          </main>
        </Route>
        <Footer />

      </Router>
    </>
  );
}

export default App;