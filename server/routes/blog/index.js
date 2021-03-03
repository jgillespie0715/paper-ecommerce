const express = require('express');
const router = express.Router();
const { requireLogin } = require('./controllers');
const Blog = require('../../models/Blog');

router.get('/current_user', (req, res, next) => {
	console.log('hit blog');
	res.send(req.user);
});

router.get('/blogs/:id', requireLogin, async (req, res, next) => {
	const blog = await Blog.findOne({
		_user: req.user.id,
		_id: req.params.id,
	});

	res.send(blog);
});

router.get('/blogs', requireLogin, async (req, res, next) => {
	const blogs = await Blog.find({ _user: req.user.id });

	res.send(blogs);
});

router.post('/blogs', requireLogin, async (req, res, next) => {
	const { title, content } = req.body;

	const blog = new Blog({
		title,
		content,
		_user: req.user.id,
	});

	const response = await blog.save().catch(next);
	res.status(200).send(response);
});

module.exports = router;
