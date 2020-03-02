const express   = require('express');
const User  = require('../models/User');
const router = express.Router();

// GET ALL USERS
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({message: err})
    }
});

// GET A SPECIFIED USER
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({message: err})
    }
});

// DELETE A USER
router.delete('/:UserId', async (req, res) => {
    try {
        const user = await User.deleteOne({"_id": req.params.userId});
        res.json(user);
    } catch (err) {
        res.json({message: err})
    }
});

//SUBMIT A USER
router.post('/', async (req, res) => {

    const User = new User({
        name: req.body.name
    });

    try {
        const submittedUser = await User.save();
        res.json(submittedUser);
    } catch (err) {
        res.json({message: err})
    }
});

module.exports = router;
