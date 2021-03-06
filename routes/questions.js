const express   = require('express');
const Question  = require('../models/Question');
const router = express.Router();

// GET ALL QUESTIONS
router.get('/', async (req, res) => {
    try {
        const posts = await Question.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err})
    }
});

// GET A SPECIFIED QUESTION
router.get('/:questionId', async (req, res) => {
    try {
        const post = await Question.findById(req.params.questionId);
        res.json(post);
    } catch (err) {
        res.json({message: err})
    }
});

// DELETE A QUESTION
router.delete('/:questionId', async (req, res) => {
    try {
        const post = await Question.deleteOne({"_id": req.params.questionId});
        res.json(post);
    } catch (err) {
        res.json({message: err})
    }
});

// PUSH ANSWER TO A QUESTION
router.put('/:questionId', async (req, res) => {
    try {
        let filter = {"_id": req.params.questionId};
        let update = req.body;
        const question = await Question.updateOne(filter, {$push: {answers: update}});
        res.json(question);
    } catch (err) {
        res.json({message: err})
    }
});

//SUBMIT A QUESTION
router.post('/', async (req, res) => {

    const question = new Question({
        questions: req.body.questions,
    });

    try {
        const submittedQuestion = await question.save();
        res.json(submittedQuestion);
    } catch (err) {
        res.json({message: err})
    }
});

module.exports = router;
