const express = require('express');
const ejs = require('ejs');
const Blog = require('./models/Blog');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//Connection DB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWEARS
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
  const blog = await Blog.find({});
  res.render('index', {
    blog,
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.post('/blog', async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numarali porta baglandi`);
});
