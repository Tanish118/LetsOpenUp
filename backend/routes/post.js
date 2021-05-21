const express = require('express');
const router = express.Router();

const { Post } = require('../models/Post');

router.post('/uploadPost', (req, res) => {
    const post = new Post(req.body);

    post.save((err) => {
        if (err)
            return res.status(400).json({ success: false });
        return res.status(200).json({ success: true });
    })
})

router.get('/getPosts', (req, res) => {
    Post.find()
        .sort({ 'createdAt': -1 })
        .populate('writer')
        .exec((err, posts) => {
            if (err)
                return res.status(400).json({ success: false });
            return res.status(200).json({ success: true, posts });
        })
})

router.post('/getPost', (req, res) => {
    Post.findOne({ '_id': req.body.postId })
        .populate('writer')
        .exec((err, post) => {
            if (err)
                return res.status(400).send(err);
            return res.status(200).json({ success: true, post });
        })
})

router.post('/getPreferedPosts', (req, res) => {
    Post.find({ 'category': req.body.preference })
        .populate('writer')
        .exec((err, preferposts) => {
            if (err)
                return res.status(400).send(err);
            return res.status(200).json({ success: true, preferposts });
        })
})

router.post('/getUserPosts', (req, res) => {
    Post.find({ 'writer': req.body.userId })
        .populate('writer')
        .exec((err, posts) => {
            if (err)
                return res.status(400).send(err);
            return res.status(200).json({ success: true, posts });
        })
})

router.post('/deletePost', (req, res) => {
    Post.findOneAndDelete({ '_id': req.body.postId })
        .exec((err, done) => {
            if (err)
                return res.status(400).json({ success: false });
            return res.status(200).json({ success: true });
        })
})

module.exports = router;