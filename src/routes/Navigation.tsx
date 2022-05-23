import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import { LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg';
import RegisterPage from '../03-forms/pages/RegisterPage';
import FormikBasicPage from '../03-forms/pages/FormikBasicPage';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
            <NavLink to="/register" activeClassName="nav-active" exact>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Lazy3</NavLink>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        
          <Route path="/formik-basic">
            <FormikBasicPage/>
          </Route>
          <Route path="/lazy3">
            <LazyPage3/>
          </Route>

          <Route path="/register">
            <RegisterPage/>
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation