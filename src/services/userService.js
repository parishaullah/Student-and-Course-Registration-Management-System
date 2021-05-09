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

  const body = { ...user };
  console.log("SaveStudenttttttttttt");
    console.log(body);
  return http.post(apiEndpoint, body);
}
/*
export function deleteMovie(movieId) {
  return http.delete(studentUrl(movieId));
}*/