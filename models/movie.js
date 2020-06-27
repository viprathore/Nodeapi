var mongoose  = require('mongoose');

const movieSchema = mongoose.Schema({
   name: String,
   description:String,
   release_date:String,
   genre:String,
   duration:String,
   rating:Number,
   created_at:{ type : Date, default: Date.now }
});


module.exports = mongoose.model('Movie', movieSchema);  