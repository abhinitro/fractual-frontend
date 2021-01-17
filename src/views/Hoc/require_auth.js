import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      console.log("componentDidMount");
      if (!this.props.authenticated) {
      
         this.props.history.push('/login');
       // this.context.router.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      console.log("componentWillUpdate");
      if (!nextProps.authenticated) {
        this.props.history.push('/login');
       // this.context.router.history.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    console.log("ccccccccccccccccccc",state.simpleReducer);
   return { authenticated: state.simpleReducer.authenticated };
  }
  Authentication.contextTypes = {
    router: PropTypes.object
  }

  return connect(mapStateToProps)(Authentication);
}