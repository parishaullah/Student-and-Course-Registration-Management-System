import http from "./httpService";
import { apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/users";

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUsers() {
  return http.get(apiEndpoint);
}

export function getUser(userId) {
  return http.get(userUrl(userId));
}

export function saveUser(user) {
  //const {students}=student
  if (user.user_id) {
    const body = { ...user };
    delete body.user_id;
    console.log("SaveStudenttttttttttt");
    console.log(body);
    console.log(user.user_id);
    console.log("SaveStudenttttttttttt");
    return http.put(userUrl(user.user_id), body);
  }

  const body = { ...user };
  console.log("SaveStudenttttttttttt");
    console.log(body);
    //console.log("students.student_iddddddd"+students.student_id);
    //console.log("body.students.student_id"+body.students.student_id);
    //console.log("SaveStudenttttttttttt");
  delete body.user_id;
  return http.post(apiEndpoint, body);
}
/*
export function deleteMovie(movieId) {
  return http.delete(studentUrl(movieId));
}*/