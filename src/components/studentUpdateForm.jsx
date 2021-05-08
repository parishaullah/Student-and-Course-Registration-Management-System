import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getStudent,saveStudent } from "../services/studentInfoService";

class StudentRegisterForm extends Form {
  state = {
    data: {student_id: "",student_first_name : "" , student_last_name : "" , student_grade_level : ""  , student_university_name : "" , student_phone_number : "" , student_email : "" , student_address : "" ,  student_city : "" , student_state : "" , student_country : "" , student_created_by_user_id : "" , student_updated_by_user_id : "" },
    grade_level:[ {_id:1, name: 10},{_id:2, name: 11},{_id:3, name: 12}],
    errors: {}
  };

  schema = {
    student_id: Joi.number().label("Id"),
    student_first_name: Joi.string()
      .required()
      .max(50)
      .label("Name"),
      student_last_name: Joi.string()
      .required()
      .max(50)
      .label("Name"),

      student_grade_level: Joi.number()
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

  async populateStudent() {
    try {
      const studentId = this.props.match.params.id;
      const { data: student } = await getStudent(studentId);
      this.setState({ data: this.mapToViewModel(student) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/");
    }
  }

   async componentDidMount() {
    await this.populateStudent();
  }

  mapToViewModel(student) { 
    return {
      student_id: student.student_id,
      student_first_name: student.student_first_name,
      student_last_name: student.student_last_name,
      student_grade_level: student.student_grade_level,
      student_university_name: student.student_university_name,
      student_phone_number: student.student_phone_number, 
      student_email: student.student_email,
      student_address: student.student_address,
      student_city: student.student_city,
      student_state: student.student_state,
      student_country: student.student_country,
      student_created_by_user_id: student.student_created_by_user_id,
      student_updated_by_user_id: student.student_updated_by_user_id,
    };
  }

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
          {this.renderInput("student_first_name", "Student First Name")}
          {this.renderInput("student_last_name", "Student Last Name")}
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
          {this.renderButton("Update")}
        </form>
      </div>
    );
  }
}

export default StudentRegisterForm;