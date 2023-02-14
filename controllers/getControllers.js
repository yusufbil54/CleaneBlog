const Blog = require('../models/Blog');

exports.getDelete = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect('/');
};

exports.getAllBlog = async (req, res) => {
  const blog = await Blog.find({}).sort({ _id: -1 });
  res.render('index', {
    blog,
  });
};

exports.getUpdate = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  blog.title = req.body.title;
  blog.detail = req.body.detail;
  blog.save();
  res.redirect(`/blog/${req.params.id}`);
};
exports.getCreat = async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/');
};
exports.getBlog = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  res.render('blog', {
    blog,
  });
};
