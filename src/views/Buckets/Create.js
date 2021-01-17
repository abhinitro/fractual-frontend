import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Row,Button,Table  } from 'reactstrap';
import { createBucket,getTodoLists } from './../../redux/actions'
import { connect } from 'react-redux';
import { AvForm, AvField } from "availity-reactstrap-validation";


class Create extends Component {

    constructor(props) {
        super(props);
      }

     

      componentDidMount(){

          this.props.getTodoLists();
      }

      handleValidSubmit = (event, values) => {

       
        this.props.createBucket({ 
          title: values.title,
          todo_id:values.todo_id
         
        });
        console.log(`Login Successful`,values);
      };
    

      moveBack(){
         const {history}=this.props;
         history.goBack();
      }
 
 render() {

    const {data}=this.props;
    let todos=data && typeof data !="undefined"?data.todos:[];
   
    if(todos ==null || todos.length==0){

     return (<div>NONE</div>)
    }
        return (
            <div className="top-margin">

               <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
              Create Bucket <small className="text-muted"></small>
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
      <AvField type="select" name="todo_id" label="Todo" multiple  validate={{
            required: true,
           }}>
           <option value="">Select Todos</option>
           {

todos.map(item=>{

return (<option value={item.id}>{item.title}</option>)

})
         

           }
        
         
        </AvField>
        
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

const mapStateToProps = state => {

    console.log("mapStateProps",state);
    return {
      data: state.simpleReducer.payload
    }
  }

export default connect(mapStateToProps,{createBucket,getTodoLists})(Create);
