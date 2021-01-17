import React from 'react';
import { connect } from 'react-redux';


class Home extends React.Component {


constructor(props){

    super(props);

    this.state={

      map:[]

    }

   }



  	 componentDidMount(){


      // this.props.getEmployee();

   }



render(){

  return (<div>{ }</div>)
}






}



const mapStateToProps = state => {

  return {
		auth :state.simpleReducer.result
	}
}




export default connect(mapStateToProps, {})(Home);


