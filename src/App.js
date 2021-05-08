import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Course from './components/course';
import User from './components/user';
import Student from './components/student';
import Logout from './components/logout';
import Home from './components/home';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import StudentRegisterForm from './components/studentRegisterForm';
import CourseRegisterForm from './components/courseRegisterForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentUpdateForm from "./components/studentUpdateForm";
import CourseUpdateForm from './components/courseUpdateForm';
import UserRegisterForm from './components/userRegisterForm';
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
          <Navbar />
            <main className="container">
              <Switch>     
                <Route path="/users/new" component={UserRegisterForm} />
                <Route path="/users" exact component={User} />
                <Route path="/students/new" component={StudentRegisterForm} />
                <Route path="/students/:id" exact component={StudentUpdateForm} />
                <Route path="/students" exact component={Student} />
                <Route path="/courses/new" component={CourseRegisterForm} /> 
                <Route path="/courses/:id" component={CourseUpdateForm} />
                <Route path="/courses" exact component={Course} />  
                <Route path="/login" component= {LoginForm} />
                <Route path="/logout" component={Logout} />      
                <Route path="/not-found" component={NotFound} />
                <Route path="/" component={Home} />   
                <Redirect to="/not-found" />
              </Switch>
            </main>
      </React.Fragment>
    );
  }
}

export default App;
