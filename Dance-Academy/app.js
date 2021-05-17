const express = require('express');
const path=require('path')
const fs=require('fs')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app=express();
// const port=80;
const hostname = '127.0.0.2';
const port = '3000';

// MongoDb section

mongoose.connect('mongodb://localhost/danceAcademy', {useNewUrlParser: true, useUnifiedTopology: true});  // danceAcademy is DB name
//Defining Schema
var formSchema =new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    addressme:String,
    desc:String,
})
var contact = mongoose.model('contact',formSchema);



//Express related stuff
app.use('/static',express.static('static'));    //(/static is url and static is folder name)
app.use(express.urlencoded())            //Help as middleware for submit form data

// PUG related STUFF
app.set('view engine','pug');        // Set the template engine as pug
app.set('views',path.join(__dirname,'views'));

//END Points
app.get("/",(req,res)=>{
    const params = {}
    // res.status(200).render('index.pug',params)
    res.status(200).render('Home.pug',params)
});
app.get("/contact",(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug',params)
});
app.post("/contact",(req,res)=>{
    //Store data in DB using express need to inatll 'npm body-parser'
    var myData=new contact(req.body)
    myData.save().then(()=>{         //myData return promise so need to handle it
        res.send("This item is saved in DB.");
    }).catch(()=>{
        res.status(400).send("Data is not saved in DB.");
    })
});

app.listen(port,hostname,()=>{
    console.log(`The application started successfully on  http://${hostname}:${port}`)
})