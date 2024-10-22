const path = require('path');
const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

// mongodb+srv://stefann06:ZEQt1Pd6paJBo3Qe@meancourse.kbdtamm.mongodb.net/ 
const app = express();

mongoose.connect('mongodb+srv://stefann06:ZEQt1Pd6paJBo3Qe@meancourse.kbdtamm.mongodb.net/node-angular?retryWrites=true&w=majority&appName=MeanCourse')
    .then(() => {
        console.log('Connected to Mongo DB!');
    })
    .catch(() => {
        console.log('Database connection failed!');
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

module.exports = app;