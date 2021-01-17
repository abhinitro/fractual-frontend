import React from 'react';
import "./style.css"
import { HashRouter, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';

import RequireAuth from './views/Hoc/require_auth';
import { AUTH_USER } from './redux/actions/types';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './redux/reducers/rootReducer'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const Login = React.lazy(() => import('./views/Login'));
const Register = React.lazy(() => import('./views/Register'));
const token = localStorage.getItem('auth_jwt_token');
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({type: AUTH_USER})
}



export default class App extends React.Component {


   constructor(props){

    super(props);
     this.state={
        isOpen:false
     }
}

  

   render(){

    return ( 
     <Provider store={store}>
     <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route  path="/login" name="Login" render={props =><Login {...props}/>} />
              <Route  path="/register" name="Register" render={props =><Register {...props}/>} />
              <Route  path="/" name="Home" component={RequireAuth(props =><DefaultLayout {...props}/>)} />
            </Switch>
            <ToastContainer />
          </React.Suspense>
      </HashRouter>
      </Provider>
  );
   }
  
}





