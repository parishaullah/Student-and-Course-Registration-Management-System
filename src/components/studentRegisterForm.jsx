import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveStudent } from "../services/studentInfoService";

class StudentRegisterForm extends Form {
  state = {
    data: {student_first_name : "" , student_last_name : "" , student_grade_level : "" , student_university_name : "" , student_phone_number : "" , student_email : "" , student_address : "" ,  student_city : "" , student_state : "" , student_country : "" , student_created_by_user_id : "" , student_updated_by_user_id : "" },
    grade_level:[ {_id:1, name: 10},{_id:2, name: 11},{_id:3, name: 12}],
    errors: {}
  };

  schema = {
    student_first_name: Joi.string()
      .required()
      .max(50)
      .label("Name"),
      student_last_name: Joi.string()
      .required()
      .max(50)
      .label("Name"),
      student_grade_level: Joi.string()
      .required()
      .label("Grade Level"),
      student_university_name: Joi.string()
      .required()
      .max(50)
      .label("University Name"),    
      student_phone_number: Joi.string()
      .required()
      .label("Phone No"),
      student_email: Joi.string()
      .email()
      .required()
      .max(50)
      .label("Email"),
      student_address: Joi.string()
      .required()
      .max(50)
      .label("Address"),
      student_city: Joi.string()
      .required()
      .max(50)
      .label("City"),
      student_state: Joi.string()
      .required()
      .max(50)
      .label("State"),
      student_country: Joi.string()
      .required()
      .max(50)
      .label("Country"),
      student_created_by_user_id: Joi.number()
      .required()
      .max(50)
      .label("Created by user ID"),
      student_updated_by_user_id: Joi.number()
      .required()
      .max(50)
      .label("Updated by user ID"),
    };

    doSubmit = async () => {
      await saveStudent(this.state.data);

      this.props.history.push("/students");
    };


    render() {
      //if (auth.getCurrentUser()) return <Redirect to="/" />;
    

      return (
        <div>
          <h1> Student Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("student_first_name", "First Name")}
            {this.renderInput("student_last_name", "Last Name")}
            {this.renderSelect("student_grade_level", "Grade Level", this.state.grade_level)}
            {this.renderInput("student_university_name", "University Name")}
            {this.renderInput("student_phone_number", "Phone Number")}
            {this.renderInput("student_email","Email")}
            {this.renderInput("student_address","Address")}
            {this.renderInput("student_city","City")}
            {this.renderInput("student_state","State")}
            {this.renderInput("student_country","Country")}
            {this.renderInput("student_created_by_user_id","Created by")}
            {this.renderInput("student_updated_by_user_id","Updated by")}
            {this.renderButton("Register")}
          </form>
        </div>
      );
    }
  }

  export default StudentRegisterForm;