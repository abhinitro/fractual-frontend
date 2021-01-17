import React, { Component, Suspense } from 'react';

import { Container } from 'reactstrap';

import { Redirect, Route, Switch } from 'react-router-dom';

import DefaultHeader from './../DefaultHeader'

import routes from './../../routes'



class DefaultLayout extends Component {


 loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

render(){

const props=this.props;
	return (
     <div>
       <DefaultHeader {...props} />
        <Container fluid>
        <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                   <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
         </Container>
    </div>

     );
}
}



export default DefaultLayout;