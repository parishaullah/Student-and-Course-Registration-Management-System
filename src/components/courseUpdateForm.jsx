import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveCourse,getCourse } from './../services/courseService';

class CourseRegisterForm extends Form {
  state = {
    data: { course_id: "", course_title:"",course_description:"",course_price:"",course_rating: "",course_created_by_user_id:"",course_updated_by_user_id: "" },
    rates: [ {_id:1, name: 1},{_id:2, name: 2},{_id:3, name: 3},{_id:4, name: 4},{_id:5, name: 5}],
    errors: {}
  };

  schema = {
    course_id: Joi.number().label("Id"),
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
    course_rating: Joi.number()
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


    async populatecourse() {
      try {
    
        const courseId = this.props.match.params.id;
        const { data: course } = await getCourse(courseId);
        this.setState({ data: this.mapToViewModel(course) });
      } catch (ex) {
        if (ex.response && ex.response.status === 404)
          this.props.history.replace("/");
      }
    }

    async componentDidMount() {
      await this.populatecourse();
    }

    mapToViewModel(course) {
      return {
        course_id: course.course_id,
        course_title: course.course_title,
        course_description: course.course_description,
        course_price: course.course_price,
        course_rating: course.course_rating,
        course_created_by_user_id: course.course_created_by_user_id,
        course_updated_by_user_id: course.course_updated_by_user_id,
      };
    }


    doSubmit = async () => {
      await saveCourse(this.state.data);

      this.props.history.push("/courses");
    };

    render() {
      return (
        <div>
          <h1> Course Update</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("course_title", "Course Title")}
            {this.renderInput("course_description", "Course Description")}
            {this.renderInput("course_price", "Course Price")}
            {this.renderInput("course_rating", "Course Rating")}
            {this.renderInput("course_created_by_user_id","Created by")}
            {this.renderInput("course_updated_by_user_id","Updated by")}
            {this.renderButton("Update")}
          </form>
        </div>
      );
    }
  }

  export default CourseRegisterForm;