import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/courses";

function courseUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getCourses() {
    return http.get(apiEndpoint);
}

export function getCourse(courseId) {
    return http.get(courseUrl(courseId));
}

export function saveCourse(course) {
    //const {students}=student
    if (course.course_id) {
        const body = {...course};
        //const iidd= student.id;
        delete body.course_created_by_id;
        delete body.course_id;
        console.log("SaveStudenttttttttttt");
        console.log(body);
        console.log(course.course_id);
        console.log("SaveStudenttttttttttt");
        return http.put(courseUrl(course.course_id), body);
    }

    const body = {...course};
    console.log("SaveStudenttttttttttt");
    console.log(body);
    //console.log("students.student_iddddddd"+students.student_id);
    //console.log("body.students.student_id"+body.students.student_id);
    //console.log("SaveStudenttttttttttt");
    delete body.course_id;
    return http.post(apiEndpoint, body);
}

/*
export function deleteMovie(movieId) {
  return http.delete(studentUrl(movieId));
}*/