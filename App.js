import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import ProtectedRoute from './middleware/ProtectedRoute';


import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Layout = React.lazy(() => import('./containers/Layout'));

// Pages
const Login = React.lazy(() => import('./components/auth/Login'));
const Register = React.lazy(() => import('./components/auth/Register'));
const Page404 = React.lazy(() => import('./components/errors/Page404'));
const Page500 = React.lazy(() => import('./components/errors/Page500'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <AuthContextProvider>
              <Switch>            
                  <Route exact path="/login" name="Login Page" component={Login}/>
                  <Route exact path="/register" name="Register Page" component={Register}/>
                  <Route exact path="/404" name="Page 404" component={Page404}/>
                  <Route exact path="/500" name="Page 500" component={Page500}/>
                  <ProtectedRoute path="/" name="Home" component={Layout} />
              </Switch>
            </AuthContextProvider>
          </React.Suspense>
      </BrowserRouter>    
    );
  }
}

export default App;
