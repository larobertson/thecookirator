require('dotenv').config()
var mongoose = require('mongoose');
db = mongoose.createConnection(`${process.env.DB_CONNECT}`, {useNewUrlParser: true});


db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var cookieSchema = mongoose.Schema({
  id: Number,  //this should uniquely identify cookies by type/location
  location: String,
  rating: Number,
  type: String,
  description: String,
  address: String
});

var Cookie = mongoose.model('Cookie', cookieSchema);

var selectAll = function(callback) {
  Cookie.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;