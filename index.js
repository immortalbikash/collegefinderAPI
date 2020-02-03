const express = require('express');
const taskRouter = require('./routes/users');
const app = express();

app.listen(9999, ()=>{
    console.log('App is running at localhost');
});