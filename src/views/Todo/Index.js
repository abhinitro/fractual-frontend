import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Row,Button,Table  } from 'reactstrap';
import { getTodoLists,updateTodo,deleteTodo } from './../../redux/actions'
import { connect } from 'react-redux';


 class Index extends Component {
    
    
    constructor() {
        super();
        this.state = {
          list: [],
          pageCount:'',
          pageSize:'',
          loading:false
        };
    
      }
     
       componentDidMount() {
        
        this.props.getTodoLists();

      }


     async changeStatus(id){

        await this.props.updateTodo({id:id,state_id:1});

       setTimeout(() => {
        window.location.reload();   
       }, 500); 
      
      }

      handleEdit(id){
      const {history}=this.props;
      history.push(`/todo/update/${id}`)
     }
    
     handleDelete(id){
       this.props.deleteTodo({id:id}).then(res=>{

        setTimeout(() => {
          window.location.reload();   
         }, 500); 
        
          }).catch(err=>{
            console.log(err)
          })
      
     }
    
      moveToCreate(){
      const {history}=this.props;
      history.push(`/todo/create`)
    
     }
    render() {
       const {data}=this.props;
       let todos=data && typeof data !="undefined"?data.todos:[];
      
       if(todos ==null ){

        return (<div>NONE</div>)
       }

        return (
            <div className="top-margin">
                  <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Todos <small className="text-muted"></small>
                <button className="btn btn-success pull-right" onClick={() => this.moveToCreate()}>Create</button>
              </CardHeader>
              <CardBody>
              <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Todo</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { todos.map( (item)=>{

          return (<tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.date}</td>
            <td>{item.state_id==0?"pending":"done" }</td>
            <td >
                
                 {item.state_id==0?(<button className="btn btn-info addtolist" onClick={() => this.changeStatus(item.id)}>Marked Done</button>):""}
                 <button className="btn btn-success addtolist" onClick={() => this.handleEdit(item.id)}>Edit</button>
                 <button className="btn btn-danger addtolist" onClick={() => this.handleDelete(item.id)}>Delete</button>
            </td>
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
  
  export default connect(mapStateToProps, {getTodoLists,updateTodo,deleteTodo})(Index);
  