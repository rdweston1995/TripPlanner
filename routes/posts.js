const express = require("express");
const router = express.Router();
const bcrypt = require("bycrptjs");
const jwt = require("jsonwebtoken");
const keys = require("./../config/keys");
const passport = require("passport");

//Load Post model
const Post = require("./../models/Post");

router.post("/upload", (req, res) => {
    const newPost = new Post ({
        _id: req.body._id,
        title: req.body.title,
        userName: req.body.userName,
        picUrl: req.body.picUrl,
        caption: req.body.caption,
    });

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => console.log(err));
});

router.get("/uploads", (req, res) => {
    Post.find()
        .then(posts => {
            console.log(posts);
            return res.json(posts);
        }).catch(err => console.log(err));
});

router.get("/uploads/:id", (req, res) => {
    console.log(req.params.id);
    Post.find({ _id: req.params.id })
        .then(posts => {
            console.log(posts);
            return res.json(posts);
        }).catch(err => console.log(err));
})

module.exports = router;