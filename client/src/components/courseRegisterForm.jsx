import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {saveCourse} from './../services/courseService';

class CourseRegisterForm extends Form {
    state = {
        data: {
            course_id: "",
            course_title: "",
            course_dept_name: "",
            course_credit: ""
        },
        rates: [{_id: 1, name: 1}, {_id: 2, name: 2}, {_id: 3, name: 3}, {_id: 4, name: 4}, {_id: 5, name: 5}],
        errors: {}
    };

    schema = {
        course_id: Joi.string()
            .required()
            .max(50)
            .label("Code"),
        course_title: Joi.string()
            .required()
            .max(50)
            .label("Course Title"),
        course_dept_name: Joi.string()
            .required()
            .max(50)
            .label("Dept."),
        course_credit: Joi.number()
            .required()
            .label("Credit"),
    };

    doSubmit = async () => {
        await saveCourse(this.state.data);
        this.props.history.push("/courses");
    };

    render() {
        //if (auth.getCurrentUser()) return <Redirect to="/" />;
        return (
            <div>
                <h1> Add Course </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("course_id", "Code")}
                    {this.renderInput("course_title", "Course Title")}
                    {this.renderInput("course_dept_name", "Dept.")}
                    {this.renderInput("course_credit", "Credit")}
                    {this.renderButton("Add")}
                </form>
            </div>
        );
    }
}

export default CourseRegisterForm;