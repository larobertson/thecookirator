require('dotenv').config()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/mvp', {useNewUrlParser: true},(err) => {
  if (err) {
      console.log('error in mongoose.connect', err)
  } else {
      console.log('database connected')
  }
});

// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

const cookieSchema = mongoose.Schema({
  rating: Number,
  type: String,
  size: String,
  description: String,
  location: String,
  address: String
},
{
  collection: 'cookies'
});

let Cookie = mongoose.model('Cookie', cookieSchema);

const insertCookie = (addCookie, cb) => {
  console.log('here is a database cookie, ', addCookie)
  let cookieDoc = new Cookie({
    rating: addCookie.rating,
    type: addCookie.type,
    size: addCookie.size,
    description: addCookie.description,
    location: addCookie.location,
    address: addCookie.address
  })


  // save model to database
  cookieDoc.save((err, data) => {
    if (err) {
      console.log('error saving to database', err)
    } else {
     cb(null, data)
    }
  })
}


const selectAll = function(callback) {
  console.log('trying to run find')
  Cookie.find({}, function(err, items) {
    console.log(items)
    callback(null, items)
  });
};

module.exports = {
  insertCookie,
  selectAll
}