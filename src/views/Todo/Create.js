import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Row,Button,Table  } from 'reactstrap';
import { createTodo } from './../../redux/actions'
import { connect } from 'react-redux';
import { AvForm, AvField } from "availity-reactstrap-validation";


class Create extends Component {

    constructor(props) {
        super(props);
      }

      static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
      }

      handleValidSubmit = (event, values) => {

       
        this.props.createTodo({ 
          title: values.title,
          description:values.description,
          date:values.date,
        });
        console.log(`Login Successful`,values);
      };
    

      moveBack(){
         const {history}=this.props;
         history.goBack();
      }
 
 render() {
        return (
            <div className="top-margin">

               <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                 Create Todo <small className="text-muted"></small>
    
               <button className="btn btn-success pull-right" onClick={() => this.moveBack()}>Back</button>

              
              </CardHeader>
              <CardBody>

                  <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
      <AvField
          name="title"
          label="Title"
          type="text"
          validate={{
            required: true,
           }}
        />
        <AvField
          name="description"
          label="Description"
          type="textarea"
          validate={{
            required: true,
           }}
        />

         <AvField
          name="date"
          label="Date"
          type="date"
          validate={{
            required: true,
           }}
        />
       
        
        <Button id="submit">Submit</Button><br/>
        

      </AvForm>
            
           
             </CardBody>

           
            </Card>
          </Col>
        </Row>
                
            </div>
        )
    }
}


export default connect(null,{createTodo})(Create);
