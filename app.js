const express=require('express');
const router = require("./src/routes/api");
const app=new express();
const bodyParser = require('body-parser');

//Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')
const mongoose= require('mongoose');

//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(bodyParser.json());

//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter)

// Mongo DB Database Connection Configer 
const dbUser = 'RoktimSazib'
const dbPass = 'LdGxf2xFOiwWPVPA'
const dbName = 'gym'
// Mongo DB Database Connection
const mongoAtlasUri = `mongodb://${dbUser}:${dbPass}@cluster0-shard-00-00.ilhbb.mongodb.net:27017,cluster0-shard-00-01.ilhbb.mongodb.net:27017,cluster0-shard-00-02.ilhbb.mongodb.net:27017/${dbName}?replicaSet=atlas-5xyc8u-shard-0&ssl=true&authSource=admin`;

try {
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true,autoIndex:true,forceServerObjectId: true},
      () => console.log(" Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}

app.use("/api/v1",router);

//Undefined Route 
app.use('*',(req,res)=>{
    res.status(404).json({status:"faild",data:"Not found"})
})

module.exports=app;



