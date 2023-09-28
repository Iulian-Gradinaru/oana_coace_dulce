import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';

import { About } from './components/About';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { Information } from './components/Information';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';

import './App.css';
import { Post } from './components/Post/Post';
import { ProductDescriptions } from './components/ProductDescriptions';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/information" component={Information} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/product/:productId" component={ProductDescriptions} />
            <Route path="/post/:postId" component={Post} />
            <Route path="*" component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
};
