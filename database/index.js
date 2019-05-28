require('dotenv').config()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(`${process.env.DB_CONNECT}`, {useNewUrlParser: true},(err) => {
  if (err) {
      console.log('error in mongoose.connect', err)
  } else {
      console.log('database connected')
  }
});
mongoose.set('useCreateIndex', true);

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
cookieSchema.index({
  'type': 'text',
  'size': 'text',
  'description': 'text',
  'location': 'text'
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

//initial get request to select EVERYTHING
const selectAll = function(callback) {
  Cookie.find({}, function(err, items) {
    callback(null, items)
  });
};

//narrow down with search results
const searchText = function(searchString, cb) {
  console.log('this is the searchstring', searchString)
  Cookie.find({$text: {$search: searchString}}, function(err, items) {
    console.log(items)
    cb(null, items)
  });
};

module.exports = {
  insertCookie,
  selectAll,
  searchText
}