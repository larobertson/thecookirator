require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = process.env.PORT || 3000;

const app = express();

app.use('/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());



app.get('/cookies/:page', function (req, res) {
  console.log('trying to get cookies')
  let limit = 9;
  let page = req.params.page || 1;
  db.selectAll(limit, page, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data)
    }
  });
});

app.get('/search/:page', function (req, res) {
  let searchString = req.query.search;
  let limit = 9;
  let page = req.params.page || 1;
  db.searchText(searchString, limit, page, function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data)
    }
  })
})

app.post('/newCookie', function (req, res) {
  let newCookie = req.body; //this is an object formatted to go into the db
  db.insertCookie(newCookie, (err, data) => {
    if (err) { console.log(err, 'error in insert') }
    else { res.send(200) } 
  })
})


app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

