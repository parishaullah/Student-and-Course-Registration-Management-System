import http from "./httpService";
import { apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/students";

function studentUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getStudents() {
  return http.get(apiEndpoint);
}

export function getStudent(studentId) {
  return http.get(studentUrl(studentId));
}

export function saveStudent(student) {
  //const {students}=student
  if (student.student_id) {
    const body = { ...student };
    //const iidd= student.id;
    delete body.student_created_by_id;
    delete body.student_id;
    console.log("SaveStudenttttttttttt");
    console.log(body);
    console.log(student.student_id);
    console.log("SaveStudenttttttttttt");
    return http.put(studentUrl(student.student_id), body);
  }

  const body = { ...student };
  console.log("SaveStudenttttttttttt");
    console.log(body);
    //console.log("students.student_iddddddd"+students.student_id);
    //console.log("body.students.student_id"+body.students.student_id);
    //console.log("SaveStudenttttttttttt");
  delete body.student_id;
  return http.post(apiEndpoint, body);
}
/*
export function deleteMovie(movieId) {
  return http.delete(studentUrl(movieId));
}*/