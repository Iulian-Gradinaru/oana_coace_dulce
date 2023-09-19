import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';

import { About } from './components/About';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { Information } from './components/Information';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { Cake } from './Pages/Cake/Cake';
import { BakeryProducts } from './Pages/BakeryProducts';
import './App.css';
import { Post } from './components/Post/Post';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cake" component={Cake} />
          <Route exact path="/bakery-product" component={BakeryProducts} />
          <Route path="/post/:postId" component={Post} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
