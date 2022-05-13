import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import {  LazyPage2,LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg';
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/shopping" activeClassName="nav-active" exact>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/shopping">
            <ShoppingPage/>
          </Route>
          <Route path="/lazy2">
            <LazyPage2/>
          </Route>
          <Route path="/lazy3">
            <LazyPage3/>
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation