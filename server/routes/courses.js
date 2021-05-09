const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Courses = require('../models/courses');

//Get all courses
router.get('/courses', async (req, res) => {
    try {
        const result = await Courses.findAll();
        console.log(result);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
});

//Get particular course
router.get("/courses/:course_id", async (req, res) => {
    try {
        let course = await Courses.findOne({where: {course_id: req.params.course_id}});
        if (!course) return res.status(400).send("Course does not exist!");
        res.status(200).json(
            course
        );
    } catch (err) {
        console.log(err);
    }
});

//Create course
router.post("/courses", async (req, res) => {
    try {
        let exsistingCourse = await Courses.findOne({where: {course_id: req.params.course_id}});
        if (exsistingCourse !== null) return res.status(400).send("User already registered");

        const course = await Courses.create({
            course_id: req.body.course_id,
            course_title: req.body.course_title,
            course_dept_name: req.body.course_dept_name,
            course_credit: req.body.course_credit
        });

        console.log(course);

        const result = await Courses.findAll({
            where: {
                course_id: req.body.course_id
            }
        })

        res.status(200).json(
            result
        );
    } catch (err) {
        console.log(err);
    }
});

//Update course
router.put("/courses/:course_id", async (req, res) => {
    try {
        let course = await Courses.findOne({where: {course_id: req.params.course_id}});
        if (!course) return res.status(400).send("Course does not exist!");

        const result = await Courses.update({
            course_id: req.body.course_id,
            course_title: req.body.course_title,
            course_dept_name: req.body.course_dept_name,
            course_credit: req.body.course_credit
        }, {
            where: {
                course_id: req.params.course_id
            }
        });

        const updatedResult = await Courses.findAll({
            where: {
                course_id: req.params.course_id
            }
        })

        res.status(200).json(
            updatedResult
        );
    } catch (err) {
        console.log(err);
    }
});

//Delete course
router.delete("/courses/:course_id", async (req, res) => {
    try {
        let course = await Courses.findOne({where: {course_id: req.params.course_id}});
        if (!course) return res.status(400).send("Course does not exist!");

        await Courses.destroy({
            where: {
                course_id: req.params.course_id
            }
        });

        res.status(200).send("Successfully deleted");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;