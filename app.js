var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

app.use(express.static('./public'));
app.use(cookieParser());
app.use(express.static('/public/img'));
app.use(express.static('/public/fonts'));
app.use(express.static('/public/js'));
app.use(express.static('/public/views'));

app.get('/', function(req, res) {
  if(req.cookies.loggedin === 'true') {
  res.sendFile(__dirname + '/public/views/dashboard.html');
  } else {
    res.sendFile(__dirname + '/public/views/index.html');
  }
});

app.get('/logout', jsonParser, function(req, res) {
  if(req.cookies.loggedin == 'true') {
    res.clearCookie('loggedin');
    res.redirect('/');
  }
});

app.get('/workouts', function(req, res) {
  res.sendFile(__dirname + '/public/views/workouts.html');
})


app.post('/login', jsonParser, function(req, res) {
  if(req.body.username == 'yes' && req.body.password === 'no') {
    res.cookie('loggedin', 'true');
    res.json({success: true, message: 'You will be directed to dashboard'});
  } else {
    res.json({success: false, message: 'Invalid login'});
  }
})

var port = process.env.PORT || 1337;
app.listen(port, function() {
 console.log("listening on port " + port);
});
