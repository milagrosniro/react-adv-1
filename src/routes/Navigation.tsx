import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import routes from './routes'

import logo from '../logo.svg';
import { Suspense } from 'react';


export const Navigation = () => {
  return (
    <Suspense fallback={null}>

    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            {
              routes.map(({path,name}) =>(
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active">{name}</NavLink>
                </li>
              ))
            }
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {
            routes.map(({path, Component})=>(
              <Route path={path}>
                <Component/>
              </Route>
            ))
          }
         <Redirect to={routes[0].path} />
        </Switch>
      </div>
    </Router>
    </Suspense>
  );
}

export default Navigation