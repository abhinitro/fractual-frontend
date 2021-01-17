import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Row,Button,Table  } from 'reactstrap';
import { getBucketTodoLists,updateTodo,deleteTodo } from './../../redux/actions'
import { connect } from 'react-redux';

class BuckeTodo extends Component {

    constructor() {
        super();
        this.state = {
          list: [],
        };
    
      }
     
       componentDidMount() {
        
        this.props.getBucketTodoLists({id:this.props.match.params.id});

      }

      
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
                <i className="fa fa-align-justify"></i> Todos <small className="text-muted"></small>
                <button className="btn btn-success pull-right" onClick={() => this.moveBack()}>Back</button>

              </CardHeader>
              <CardBody>
              <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Todo</th>
          <th>Date</th>
         
        </tr>
      </thead>
      <tbody>
        { todos.map( (item)=>{

          return (<tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.date}</td>
           </tr>);
        })}
      </tbody>
    </Table>
           
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
  
  export default connect(mapStateToProps, {getBucketTodoLists,updateTodo,deleteTodo})(BuckeTodo);