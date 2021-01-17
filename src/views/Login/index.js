import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";

import LoginForm from './LoginForm';
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../style.css"

import  {signUserIn}  from './../../redux/actions'




class Login extends React.Component {


    constructor(props){

        super(props);
    
             this.state={
                 
              }
     }


     render(){
         return (<div>
            <Container>
            <Row>
              <Col />
              <Col lg="8">
                <Jumbotron>
                  <h3 class="form-title">
                    <u>Login Form</u>
                  </h3>
                  <hr />
                  <Card>
                    <CardBody>
                     <LoginForm {...this.props}/>
                    </CardBody>
                  </Card>
                </Jumbotron>
              </Col>
              <Col />
            </Row>
          </Container></div>)
     }

}

const mapStateToProps = state => {

  console.log("mapStateProps",state);
  return {
    errorMsg: state.error
  }
}

export default connect(mapStateToProps, {signUserIn})(Login);
