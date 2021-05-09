import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import UpdateCourse from "./routes/UpdateCourse";
import ViewCourse from "./routes/ViewCourse";
import {CoursesContextProvder} from "./context/CoursesContext";

const App = () => {
    return (
        <CoursesContextProvder>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/courses/:course_id/update" component={UpdateCourse}/>
                        <Route exact path="/courses/:course_id" component={ViewCourse}/>
                    </Switch>
                </Router>
            </div>
        </CoursesContextProvder>
    );
};

export default App;