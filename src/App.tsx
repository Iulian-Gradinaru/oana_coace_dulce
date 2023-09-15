import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Home } from './components/Home';
import { BakeryProducts } from './components/BakeryProducts';
import { Information } from './components/Information';
import { Contact } from './components/Contact';
import { Events } from './components/Events';
import { NavBarContact } from './components/NavBarContact';

export const App = () => {
  return (
    <Router>
      <NavBarContact />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/bakery-products" component={BakeryProducts} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/information" component={Information} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
};
