import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { set } from 'mongoose';

import PostModel from './models/Post';
import UserModel from './models/User';

import PostController from './controllers/PostController';
import UserController from './controllers/UserController';

mongoose.connect('mongodb://localhost/blog');

const app = express();
const Post = new PostController();
const User = new UserController();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  }
);

app.get('/posts', Post.index);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);
app.get('/posts/:id', Post.read)
app.post('/posts', Post.create);

app.get('/users', User.index);
app.delete('/users/:id', User.delete);
app.post('/users/:id', User.update);
app.get('/users/:id', User.read);
app.post('/users', User.create);

app.listen('3333', function(){
    console.log('Started');
});