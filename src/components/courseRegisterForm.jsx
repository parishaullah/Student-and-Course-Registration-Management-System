import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveCourse } from './../services/courseService';

class CourseRegisterForm extends Form {
  state = {
    data: { course_title:"",course_description:"",course_price:"",course_rating: "",course_created_by_user_id:"",course_updated_by_user_id: "" },
    rates: [ {_id:1, name: 1},{_id:2, name: 2},{_id:3, name: 3},{_id:4, name: 4},{_id:5, name: 5}],
    errors: {}
  };

  schema = {
    course_title: Joi.string()
      .required()
      .max(50)
      .label("Course Title"),
    course_description: Joi.string()
      .required()
      .max(50)
      .label("Course Description"),
    course_price: Joi.number()
      .required()
      .label("Course Price"),
    course_rating: Joi.string()
      .required()
      .label("Course Rating"),
    course_created_by_user_id: Joi.number()
      .required()
      .max(50)
      .label("Created by user ID"),
    course_updated_by_user_id: Joi.number()
      .required()
      .max(50)
      .label("Updated by user ID"),
  };

  doSubmit = async () => {
    await saveCourse(this.state.data);
    this.props.history.push("/courses");
  };

  render() {
    //if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1> Course Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("course_title", "Course Title")}
          {this.renderInput("course_description", "Course Description")}
          {this.renderInput("course_price", "Course Price")}
          {this.renderSelect("course_rating", "Course Rating",this.state.rates)}
          {this.renderInput("course_created_by_user_id","Created by")}
          {this.renderInput("course_updated_by_user_id","Updated by")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default CourseRegisterForm;