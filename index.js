const express = require('express');
const mongoose= require('mongoose');
const taskRouter = require('./routes/users');
const collegeRouter = require('./routes/colleges');
const auth = require('./auth');
const morgan = require('morgan');
const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const cors = require('cors');
const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.options('*', cors());
app.use(cors());
app.use(express.urlencoded({extended: true }));

app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((db)=>{
        console.log('sucessfully connected to mongoDB server');

    }, (err)=> console.log(err));

app.use('/users', taskRouter);
app.use('/colleges', collegeRouter);
app.use('/upload', uploadRouter);

app.use(auth.verifyUser);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, ()=>{
    console.log(`App is running at localhost:${process.env.PORT}`);
});