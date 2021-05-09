import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveCourse } from './../services/courseService';

class StudentRegisterForm extends Form {
  state = {
    data: {student_id: "" , course_id: "" , section_id : "" , course_updated_by_user_id: ""},
    //grade_level:[ {_id:1, name: 10},{_id:2, name: 11},{_id:3, name: 12}],
    courses:[ {_id : 1 , name: "CSE 323"}, {_id : 2 , name: "CSE 327"},{_id : 3 , name: "CSE 331"},{_id : 4 , name: "CSE445"},{_id : 5, name: "cse 499"}],
    setions:[ {_id : 1 , name: 1}, {_id : 2 , name: 2},{_id : 3 , name: 3},{_id : 4 , name: 4},{_id : 5, name: 5}],
    errors: {}
  };

  schema = {
    student_id: Joi.number()
      .required()
      .label("Student ID"),
    course_id: Joi.string()
      .required()
      .max(50)
      .label("Course ID"),
    section_id: Joi.number()
      .required()
      .label("Section"),
    course_updated_by_user_id: Joi.number()
      .required()
      .label("Updated By"),
    };

   
    doSubmit = async () => {
      await saveCourse(this.state.data);

      this.props.history.push("/courseregistrations");
    };


    render() {
      //if (auth.getCurrentUser()) return <Redirect to="/" />;
    

      return (
        <div>
          <h1> Student Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("student_id", "Student ID")}
            {this.renderSelect("course_id", "Course ID", this.state.courses)}
            {this.renderSelect("section_id", "Section ID", this.state.setions)}
            {this.renderInput("course_updated_by_user_id", "Updated By")}
            {this.renderButton("Register")}
          </form>
        </div>
      );
    }
  }

  export default StudentRegisterForm;