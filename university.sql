CREATE DATABASE varsity;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    user_status boolean NOT NULL DEFAULT TRUE
);

CREATE TABLE students(
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    student_cgpa NUMERIC NOT NULL,
    student_semester INT NOT NULL,
    student_total_credit INT NOT NULL,
    student_phone_number BIGINT NOT NULL,
    student_email VARCHAR(50) UNIQUE NOT NULL,
    student_address VARCHAR(50) NOT NULL
);

CREATE TABLE courses(
    course_id SERIAL PRIMARY KEY NOT NULL,
    course_title VARCHAR(50) NOT NULL,
    course_dept_name VARCHAR(50) NOT NULL,
    course_credit INT NOT NULL
);

CREATE TABLE prereqs(
    course_id INT REFERENCES courses(course_id),
    prereq_id INT REFERENCES courses(course_id)
);

CREATE TABLE instructors(
    instructor_id SERIAL PRIMARY KEY NOT NULL,
    instructor_name VARCHAR(50) NOT NULL,
    instructor_dept_name VARCHAR(50) NOT NULL
);

CREATE TABLE sections(
    section_id INT PRIMARY KEY  NOT NULL,
    course_id INT  REFERENCES courses(course_id),
    semester VARCHAR(50) NOT NULL,
    room_no VARCHAR(50) NOT NULL,
    section_time VARCHAR(50) NOT NULL
);



CREATE TABLE teaches(
    instructor_id INT REFERENCES  instructors(instructor_id),
    course_id INT REFERENCES courses(course_id),
    section_id INT REFERENCES sections(section_id)
 );

 CREATE TABLE takes(
    student_id INT REFERENCES students(student_id),
    course_id INT REFERENCES courses(course_id),
    section_id INT REFERENCES sections(section_id),
    course_updated_by_user_id INT NOT NULL,
    grade VARCHAR(10),
    last_update_time TIMESTAMP
 );
DROP TABLE takes; 
DROP TABLE teaches;
 DROP TABLE sections;