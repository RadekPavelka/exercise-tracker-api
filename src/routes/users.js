const UserModel = require("../models/user.model");
const express = require('express');
const router = express.Router();

router.post('/api/exercise/new-user', (req, res) => {
    if (!req.body) {
        return res.status(400).send("Request body is missing");
    }
    let model = new UserModel(req.body);

    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                res.status(500).send(doc);
            }

            res.status(201).json({"username": doc.username, "_id": doc._id});
        })
        .catch(err => {
            if (err.code === "11000") {
                res.status(409).send("username already taken");
            } else {
                res.status(500).json(err);
            }
        })
});

router.get('/api/exercise/users', (req, res) => {
    UserModel.find()
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});




module.exports = router;
