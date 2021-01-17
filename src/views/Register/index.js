import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import  {signUserUp}  from './../../redux/actions'

import RegisterForm from './RegisterForm';
import "./../../style.css"


 class Register extends Component {

    constructor(props){

        super(props);
    
             this.state={
                 
              }
     }
    render() {
        return (
            <div>
                 <Container>
            <Row>
              <Col />
              <Col lg="8">
                <Jumbotron>
                  <h3 class="form-title">
                    <u>Register Form</u>
                  </h3>
                  <hr />
                  <Card>
                    <CardBody>

                        <RegisterForm  {...this.props}/>
                   
                    </CardBody>
                  </Card>
                </Jumbotron>
              </Col>
              <Col />
            </Row>
          </Container>
                
            </div>
        )
    }

}



export default connect(null, {signUserUp})(Register);