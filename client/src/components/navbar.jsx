import {Link,NavLink} from "react-router-dom";
import React, { Component } from 'react';

class Navbar extends Component {
  
    render() { 
        return ( 
            <React.Fragment>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                  Demo University
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link"  to="/courses">Course </NavLink>
                  <NavLink className="nav-item nav-link" to="/students">Student
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/users">User
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/logout">Logout
                  </NavLink>
                </div>
              </div>
            </nav>
           </React.Fragment>
         );
    }
}
 
export default Navbar;