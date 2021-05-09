import React, {useContext, useEffect} from 'react'
import CourseFeatures from "../apis/CourseFeatures";
import {CoursesContext} from "../context/CoursesContext";

const CourseList = (props) => {
    const {course, setCourses} = useContext(CoursesContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CourseFeatures.get("/");
                setCourses(response.data.courses);
            } catch(err) {}
        };
        fetchData();
    },[]);
    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Code</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Dept.</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CSE 327</td>
                        <td>Software Engineering</td>
                        <td>ECE</td>
                        <td>3</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CourseList;