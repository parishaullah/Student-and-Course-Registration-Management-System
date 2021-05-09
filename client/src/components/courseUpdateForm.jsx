import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {saveCourse, getCourse} from './../services/courseService';

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


    async populatecourse() {
        try {
            const courseId = this.props.match.params.id;
            const {data: course} = await getCourse(courseId);
            this.setState({data: this.mapToViewModel(course)});
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
            course_dept_name: course.course_dept_name,
            course_credit: course.course_credit,
        };
    }


    doSubmit = async () => {
        await saveCourse(this.state.data);

        this.props.history.push("/courses");
    };

    render() {
        return (
            <div>
                <h1> Course Update </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("course_id", "Code")}
                    {this.renderInput("course_title", "Course Title")}
                    {this.renderInput("course_dept_name", "Dept.")}
                    {this.renderInput("course_credit", "Credit")}
                    {this.renderButton("Update")}
                </form>
            </div>
        );
    }
}

export default CourseRegisterForm;