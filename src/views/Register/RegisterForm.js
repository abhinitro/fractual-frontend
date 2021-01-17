import React from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {Link} from 'react-router-dom';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      first_name: "",
      last_name: "",
      password: "",
   };
  }

  handleValidSubmit = (event, values) => {

    console.log(values);
   
    this.props.signUserUp({ 
      email: values.email,
      first_name:values.first_name,
      last_name:values.last_name,
      password:values.password,
      contact:values.contact
    });
    console.log(`Login Successful`,values);
  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
    console.log(`Login failed`);
  };

  render() {
    return (
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
      <AvField
          name="first_name"
          label="First Name"
          type="text"
          validate={{
            required: true,
           }}
        />
        <AvField
          name="last_name"
          label="Last Name"
          type="text"
          validate={{
            required: true,
           }}
        />

         <AvField
          name="contact"
          label="Contact"
          type="text"
          validate={{
            required: true,
           }}
        />
        <AvField
          name="email"
          label="Email"
          type="text"
          validate={{
            required: true,
            email: true
          }}
        />
        <AvField
          name="password"
          label="Password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your password"
            },
            pattern: {
              value: "^[A-Za-z0-9]+$",
              errorMessage:
                "Your password must be composed only with letter and numbers"
            },
            minLength: {
              value: 6,
              errorMessage: "Your password must be between 6 and 16 characters"
            },
            maxLength: {
              value: 16,
              errorMessage: "Your password must be between 6 and 16 characters"
            }
          }}
        />
        <Button id="submit">Submit</Button><br/>
        <Link to="/login">Back </Link>


      </AvForm>
    );
  }
}