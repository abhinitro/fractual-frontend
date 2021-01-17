import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row,Table  } from 'reactstrap';
import { getBucketLists,updateTodo,deleteBuckets } from './../../redux/actions'
import { connect } from 'react-redux';



class Index extends Component {


    constructor() {
        super();
        this.state = {
          list: [],
        };
    
      }
     
       componentDidMount() {
        
        this.props.getBucketLists();

      }

      moveToCreate(){
        const {history}=this.props;
        history.push(`/bucket/create`)
      
       }

       moveTo(id){
        const {history}=this.props;
        history.push(`/bucket/bucket-todo-index/${id}`)
      
       }

       handleDelete(id){
        this.props.deleteBuckets({id:id}).then(res=>{
 
         setTimeout(() => {
           window.location.reload();   
          }, 500); 
         
           }).catch(err=>{
             console.log(err)
           })
       
      }


    render() {
        
            const {data}=this.props;
            let todos=data && typeof data !="undefined"?data.todos:[];
            return (
                 <div className="top-margin">
                       <Row>
                     <Col xl={12}>
                     <Card>
                   <CardHeader>
                     <i className="fa fa-align-justify"></i> Buckets <small className="text-muted"></small>
                     <button className="btn btn-success pull-right" onClick={() => this.moveToCreate()}>Create</button>
                   </CardHeader>
                   <CardBody>
                   <Table>
           <thead>
             <tr>
               <th>Id</th>
               <th>Title</th>
              <th>Actions</th>
             </tr>
           </thead>
           <tbody>
           { todos.map( (item)=>{

return (<tr>
  <th scope="row">{item.id}</th>
  <td>{item.title}</td>
  

  <td >
      
      <button className="btn btn-info addtolist" onClick={() => this.moveTo(item.id)}>Todo List</button>
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
  
  export default connect(mapStateToProps, {getBucketLists,updateTodo,deleteBuckets})(Index);