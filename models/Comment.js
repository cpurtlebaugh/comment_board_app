var mongoose = require('mongoose');

var Comment = new mongoose.Schema({
  username: String,
  created_at: Date,
  updated_at: Date,
  text: String
});
