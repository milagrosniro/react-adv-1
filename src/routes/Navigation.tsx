import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

//Ordenar alfabeticatemnte las importaciones:seleccionar lo que queiro ordenar, abrir el commmand palette y solocar sort descending

import {FormikBasicPage,  RegisterFormikPage, FormikAbstraction, FormikComponents, FormikYupPage, RegisterPage, DynamicForm} from '../03-forms/pages/';


import logo from '../logo.svg';

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
            <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic Form</NavLink>
            </li>
            <li>
            <NavLink to="/formik-register" activeClassName="nav-active" exact>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" activeClassName="nav-active" exact>Formik Abstraction</NavLink>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        
          <Route path="/formik-basic">
            <FormikBasicPage/>
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm/>
          </Route>
          <Route path="/formik-register">
            <RegisterFormikPage/>
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage/>
          </Route>

          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/formik-components">
            <FormikComponents/>
          </Route>

          <Route path="/formik-abstraction">
            <FormikAbstraction/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Navigation