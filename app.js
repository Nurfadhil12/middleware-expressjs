const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes');
const log = require('./middlewares/logger');

app.use(log);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')));
app.use(router);
app.use (( req, res, next)=>{
    res.status(404);
    res.send({
        status:'Failed',
        message:'resource'+ req.originalUrl+ ' Not found'
    })
})
app.listen(4000, () => console.log('Server: http://localhost:4000'));