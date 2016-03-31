var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

app.use(express.static('./'));
app.use(cookieParser());

app.get('/', function(req, res) {
  if(req.cookies.loggedin === 'true') {
  res.sendFile(__dirname + '/home.html');
  } else {
    res.sendFile(__dirname + '/index.html');
  }
});

app.post('/login', jsonParser, function(req, res) {
  if(req.body.username === 'alysiasaquil' && req.body.password === 'password') {
    res.cookie('loggedin', 'true');
    res.json({success: true, message: 'You will be directed to homepage'});
  } else {
    res.json({success: false, message: 'Invalid login'});
  }
})

app.get('/logout', jsonParser, function(req, res) {
  if(req.cookies.loggedin == 'true') {
    res.clearCookie('loggedin');
    res.redirect('/');
  }
});

app.listen(8080);
