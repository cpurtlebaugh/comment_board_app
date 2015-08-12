var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/commentBoardApp');
console.log("connected to mongoose!");

var Comment = require('./models/Comment');

var newEntries = [
{
  username:       "JoeShmoe",
  text:           "This is a test!"
},

{
  username:       "JoeShmoe",
  text:           "This is a test 2!"
},

{
  username:       "JoeShmoe",
  text:           "This is a test 3!"
}

]
