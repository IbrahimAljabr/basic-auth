'use strict';

const express = require('express');
const signup = require('./auth/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');


app.post(signup);
app.use('/', signup);

  





app.use('*',notFoundHandler);
app.use(errorHandler);


module.exports = {
    server: app,
    start:(port) => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT,()=>{
            console.log('Server is here ==>',PORT);
        })
    }
}