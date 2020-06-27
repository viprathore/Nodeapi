var mongoose  = require('mongoose');

const genreSchema = mongoose.Schema({
   name: String,
   description:String,
   created_at:{ type : Date, default: Date.now }
});


module.exports = mongoose.model('Genre', genreSchema);  