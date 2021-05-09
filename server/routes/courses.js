/**
 * express module
 * @const
 */
const express = require('express');

/**
 * router module
 * @const
 */
const router = express.Router();

/**
 * courses module
 * @const
 */
const Courses = require('../models/courses');

/**
 * Route for viewing all courses
 * @name get/courses
 * @function
 * @memberof module:routers/courses
 * @inner
 * @param {string} path - Express path
 */
router.get('/', async (req, res) => {
    try {
        const result = await Courses.findAll();
        console.log(result);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
});

/**
 * Route for viewing a particular course
 * @name get/courses
 * @function
 * @memberof module:routers/courses
 * @inner
 * @param {string} path - Express path
 */
router.get("/:course_id", async (req, res) => {
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

/**
 * Route serving adding courses
 * @name post/courses
 * @function
 * @memberof module:routers/courses
 * @inner
 * @param {string} path - Express path
 */
router.post("/", async (req, res) => {
    try {
        let exsistingCourse = await Courses.findOne({where: {course_id: req.body.course_id}});
        if (exsistingCourse !== null) return res.status(400).send("Course already registered");

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
        });

        res.status(200).json(
            result
        );
    } catch (err) {
        console.log(err);
    }
});

/**
 * Route serving course update
 * @name put/courses
 * @function
 * @memberof module:routers/courses
 * @inner
 * @param {string} path - Express path
 */
router.put("/:course_id", async (req, res) => {
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

/**
 * Route serving course delete
 * @name delete/courses
 * @function
 * @memberof module:routers/courses
 * @inner
 * @param {string} path - Express path
 */
router.delete("/:course_id", async (req, res) => {
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