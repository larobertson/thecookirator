const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();


app.use('/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());



app.get('/cookies', function (req, res) {
  console.log('trying to get cookies')
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('we got something back', data)
      res.send(data)
    }
  });
});

app.post('/newCookie', function (req, res) {
  console.log('what is this ---->', req.body)
  let newCookie = req.body; //this is an object formatted to go into the db
  db.insertCookie(newCookie, (err, data) => {
    if (err) { console.log(err, 'error in insert')}
    else { res.send(200) } 
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

