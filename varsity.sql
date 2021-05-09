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
INSERT INTO students (student_name,student_cgpa,student_semester,student_total_credit,student_phone_number,student_email,student_address) values ('ANM Asifur Rahman',3.50,12,120,01687616299,'anm.rahman@northsouth.edu','Uttara,Dhaka');

CREATE TABLE courses(
    course_id VARCHAR(50) PRIMARY KEY NOT NULL,
    course_title VARCHAR(50) NOT NULL,
    course_dept_name VARCHAR(50) NOT NULL,
    course_credit INT NOT NULL
);
INSERT INTO courses (course_id,course_title, course_dept_name, course_credit) values ('CSE 327','Software Engineering','ECE',3);
INSERT INTO courses (course_id,course_title, course_dept_name, course_credit) values ('CSE 323','Operating Systems Design','ECE',3);
INSERT INTO courses (course_id,course_title, course_dept_name, course_credit) values ('CSE 331','Microprocessor Interfacing & Embedded System','ECE',3);
INSERT INTO courses (course_id,course_title, course_dept_name, course_credit) values ('CSE 445','Machine Learning','ECE',3);

CREATE TABLE prereqs(
    course_id VARCHAR(50) REFERENCES courses(course_id),
    prereq_id VARCHAR(50) REFERENCES courses(course_id),
	PRIMARY KEY (course_id, prereq_id)
);
INSERT INTO prereqs (course_id,prereq_id) values ('CSE 327','CSE 323');

CREATE TABLE instructors(
    instructor_name VARCHAR(50) NOT NULL,
    instructor_init VARCHAR(10) PRIMARY KEY NOT NULL,
    instructor_dept_name VARCHAR(50) NOT NULL
);
INSERT INTO instructors (instructor_name,instructor_init,instructor_dept_name) values ('Md. Musfique Anwar','MMA1','ECE');
INSERT INTO instructors (instructor_name,instructor_init,instructor_dept_name) values ('Sifat Momen','SfM1','ECE');
INSERT INTO instructors (instructor_name,instructor_init,instructor_dept_name) values ('Mohammad Rashedur Rahman','RRN','ECE');
INSERT INTO instructors (instructor_name,instructor_init,instructor_dept_name) values ('Rajesh Palit','Rjp','ECE');

CREATE TABLE sections(
    section_id INT NOT NULL,
    course_id VARCHAR(50) REFERENCES courses(course_id),
    semester VARCHAR(50) NOT NULL,
    room_no VARCHAR(50) NOT NULL,
	section_day VARCHAR(50) NOT NULL,
    section_time VARCHAR(50) NOT NULL,
	CONSTRAINT sections_pk PRIMARY KEY (section_id, course_id, semester)
);
INSERT INTO sections (section_id,course_id,semester,room_no,section_day,section_time) values ('1','CSE 327','Spring 21','SAC 305','ST','1.00PM-2.30PM');
INSERT INTO sections (section_id,course_id,semester,room_no,section_day,section_time) values ('2','CSE 323','Spring 21','SAC 306','MW','8.00AM-9.30AM');
INSERT INTO sections (section_id,course_id,semester,room_no,section_day,section_time) values ('3','CSE 331','Spring 21','SAC 307','MW','9.40AM-11.10AM');
INSERT INTO sections (section_id,course_id,semester,room_no,section_day,section_time) values ('4','CSE 445','Spring 21','SAC 308','ST','2.40PM-04.10AM');

CREATE TABLE teaches(
    instructor_init VARCHAR(10) REFERENCES instructors(instructor_init),
    section_id INT,
	course_id VARCHAR(50) REFERENCES courses(course_id),
	semester VARCHAR(50),
	PRIMARY KEY (instructor_init, section_id, course_id, semester)
 );
INSERT INTO teaches (instructor_init,section_id,course_id,semester) values ('MMA1',1,'CSE 327','Spring 21');
INSERT INTO teaches (instructor_init,section_id,course_id,semester) values ('SfM1',2,'CSE 323','Spring 21');
INSERT INTO teaches (instructor_init,section_id,course_id,semester) values ('RRN',3,'CSE 331','Spring 21');
INSERT INTO teaches (instructor_init,section_id,course_id,semester) values ('Rjp',4,'CSE 445','Spring 21');

CREATE TABLE takes(
    student_id INT REFERENCES students(student_id),
    course_id VARCHAR(50) REFERENCES courses(course_id),
    section_id INT,
	semester VARCHAR(50),
    course_updated_by_user_id INT NOT NULL,
    last_update_time TIMESTAMP,
	PRIMARY KEY (student_id, course_id, semester)
);
INSERT INTO takes (student_id,course_id,section_id,semester,course_updated_by_user_id) values (1,'CSE 327',1,'Spring 21',1);
