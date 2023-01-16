const express = require('express');
const app = express();


//Routes
app.use('/api/signUp',require('./router/Signup'));

app.use('/',(req,res)=>{
    res.send('App is running...');
});

module.exports = app;