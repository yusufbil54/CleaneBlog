const express = require('express');
const ejs = require('ejs');
var methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
const getControllers=require('./controllers/getControllers')
const pageControllers=require('./controllers/pageControllers')

//Connection DB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWEARS
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method',
{
  methods:['POST','GET']
}));

//ROUTES
app.get('/', getControllers.getAllBlog);
app.get('/blog/:id',getControllers.getBlog );
app.delete('/blog/edit/:id',getControllers.getDelete);  
app.put('/blog/:id',getControllers.getUpdate);
app.post('/blog',getControllers.getCreat);
app.get('/blog/edit/:id',pageControllers.pageEdit );
app.get('/about',pageControllers.pageAbout);
app.get('/add_post', pageControllers.pageAdd);



const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numarali porta baglandi`);
});
