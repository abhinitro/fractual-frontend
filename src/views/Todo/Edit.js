import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Row,Button,Table  } from 'reactstrap';
import { updateTodo,getById } from './../../redux/actions'
import { connect } from 'react-redux';
import { AvForm, AvField } from "availity-reactstrap-validation";

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state={
            todo:null
        }
      }

     
      componentDidMount(){


        let id=this.props.match.params.id;

        this.props.getById({id:id}).then(data=>{

            console.log(data,data.data.todo)

            this.setState({todo:data.data.todo[0]})

        });

      }
      
      handleValidSubmit = (event, values) => {

       
        this.props.updateTodo({ 
          title: values.title,
          description:values.description,
          date:values.date,
          id:this.props.match.params.id
        });
        
      };
    

      moveBack(){
         const {history}=this.props;
         history.goBack();
      }
 
 render() {

      let obj=this.state.todo;


             
       if(obj==null ){
           return (<div>NONE</div>)
       }
 
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
          value={obj.title}
          validate={{
            required: true,
           }}
        />
        <AvField
          name="description"
          label="Description"
          type="textarea"
          value={obj.description}
          validate={{
            required: true,
           }}
        />

         <AvField
          name="date"
          label="Date"
          type="date"
          value={obj.date}
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


export default connect(null,{getById,updateTodo})(Edit);
