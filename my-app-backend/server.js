// import 
var express = require('express');
var mongoose = require('mongoose');
var pusher = require('pusher');
var cors = require('cors');


// app config
const app=express()
const port=process.env.PORT || 9000

// middleware
app.use(cors())
app.use(express.json())



// db config

// api routes
app.get('/', (req, res) => res.status(200).send('Hello Janak its working!'))


// listening port
app.listen(port, () => console.log(`listening on localhost:${port}`))

//more comments