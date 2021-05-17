// getting-started.js
const mongoose = require('mongoose');
// dhruvalkart is DB name
mongoose.connect('mongodb://localhost/dhruvalkart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log("We are connected");
});

//Defining Schema
var kittySchema =new mongoose.Schema({
  name:String
})
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  const greeting = "My name is "+this.name
  console.log(greeting);
}

//need to compile that schema in to model after can create it's object -here kitten is model name and used kittySchema 
var kitten = mongoose.model('kitten',kittySchema);

//Object of that schema
const obj = new kitten({ name: 'Dhruval' });
const obj2 = new kitten({ name: 'Bhuva' });
console.log(obj.name);         // 'Dhruval'

obj.speak();   // It only print in console

//Saving data in DB- It will genrate collection of obkect's name's plular (Here It'll create collection with name objs)
 obj.save(function (err, obj) {
  if (err) return console.error(err);
  // obj.speak();
});
 obj2.save(function (err, obj) {
  if (err) return console.error(err);
  // obj.speak();
});

// syntax=> Kitten.find({ name: /^fluff/ }, callback);
kitten.find({ name: obj }, function(err,Kittens){
  if (err) return console.error(err);
  console.log(kittens);
});