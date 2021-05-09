import http from "./httpService";
import { apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/courseregistrations";

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
    const body = { ...course };
    console.log("SaveStudenttttttttttt");
      console.log(body);
    return http.post(apiEndpoint, body);
  }
/*
export function deleteMovie(movieId) {
  return http.delete(studentUrl(movieId));
}*/