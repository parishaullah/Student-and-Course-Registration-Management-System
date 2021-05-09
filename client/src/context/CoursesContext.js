import React, {useState, createContext} from "react";

export const CoursesContext = createContext();

export const CoursesContextProvder = props => {
    const [courses, setCourses] = useState([]);

    return (
        <CoursesContext.Provider value={{courses, setCourses}}>
            {props.children}
        </CoursesContext.Provider>
    )
}