import React from 'react';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';


/***
Default Hearder 1.1.0

***/




export default class DefaultHeader extends React.Component {

 constructor(props){

    super(props);

    this.state={

      isOpen:false

    }

    this.onMove=this.onMove.bind(this);
   }



   onMove=(route)=>{

     const {history}=this.props;

     console.log(this.props);

       history.push(route);

   }


   setOpen(){

    if(this.state.isOpen){

      this.setState({isOpen:false});
    }else{
      this.setState({isOpen:true});
    }
   }
   render(){

      return( 
      <div>
         <Navbar color="light" light expand="md">
          <NavbarBrand onClick={(e)=>{
                  
                  e.preventDefault();

                  this.onMove("dashboard");


                }}>Fullstack Assignment Fractal Analytics</NavbarBrand>
          <NavbarToggler onClick={(e)=>{this.setOpen()}} />
           <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto" navbar>
               <NavItem>
               <NavLink href="#/dashboard">Todos</NavLink>
              </NavItem>

             <NavItem>
              <NavLink href="#/bucket/index">Buckets</NavLink>
            </NavItem>
              <NavItem>
                <NavLink onClick={(e)=>{
                  
                  localStorage.removeItem("auth_jwt_token");
                  this.onMove("login");
                  


                }}>Logout</NavLink>
              </NavItem>
              
             
            </Nav>
          </Collapse>
        </Navbar>
       
      	</div>)


     }



  }
