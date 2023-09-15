import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Home } from './components/Home';
import { BakeryProducts } from './components/BakeryProducts';

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/bakery-products" component={BakeryProducts} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
};
