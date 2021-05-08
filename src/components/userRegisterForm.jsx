import React from "react";
//import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveUser } from '../services/userService';

class UserRegisterForm extends Form {
  state = {
    data: { email:"",password:"",first_name:"",last_name: "", user_status: "" },
    uStatus: [{_id:1, name: "true"},{_id:2, name: "false"}],
    errors: {}
    };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .max(50)
      .label("email"),
    password: Joi.string()
      .required()
      .max(50)
      .min(8)
      .label("password"),
    first_name: Joi.string()
      .required()
      .label("First Name"),
    last_name: Joi.string()
      .required()
      .max(50)
      .label("Last Name"),
    user_status: Joi.string()
      .label("Status"),

  };

  
  doSubmit = async () => {
    try {
      /*const response = */await saveUser(this.state.data);
      this.props.history.push("/users");
 //auth.loginWithJwt(response.headers["x-auth-token"]);
   //   window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };
    

    
  

  render() {
    //if (auth.getCurrentUser()) return <Redirect to="/" />;
   return (
      <div>
        <h1> User Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password")}
          {this.renderInput("first_name", "First Name")}
          {this.renderInput("last_name","Last Name")}
          {this.renderSelect("user_status", "Status", this.state.uStatus)}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default UserRegisterForm;