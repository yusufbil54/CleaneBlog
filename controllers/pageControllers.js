const Blog = require('../models/Blog');
exports.pageEdit = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('edit', {
    blog,
  });
};
exports.pageAbout = (req, res) => {
  res.render('about');
};
exports.pageAdd = (req, res) => {
  res.render('add_post');
};
