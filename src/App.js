import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import User from './components/user';
import Student from './components/studentCourseRegistration';
import Logout from './components/logout';
import Home from './components/home';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
          <Navbar />
            <main className="container">
              <Switch>     
                <Route path="/users" exact component={User} />
                <Route path="/registration" exact component={Student} /> 
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
