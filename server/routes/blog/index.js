const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('./controllers');
const Blog = require('../../models/Blog');

router.post(
	'/blogs/:_id',
	//isAuthenticated,
	async (req, res, next) => {
		const { id, userId } = req.body;
		try {
			const blog = await Blog.findOne({
				_user: userId,
				_id: id,
			});
			res.status(200).send(blog);
		} catch (error) {
			next(error);
		}
	}
);

router.get('/blogs', isAuthenticated, async (req, res, next) => {
	const blogs = await Blog.find({ _user: req.user.id }).catch(next);
	res.status(200).send(blogs);
});

router.post('/blogs', isAuthenticated, async (req, res, next) => {
	const { title, content } = req.body;

	const blog = new Blog({
		title,
		content,
		_user: req.user.id,
	});

	const response = await blog.save().catch(next);
	res.status(201).send(response);
});

module.exports = router;
