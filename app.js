var workoutPlans = [
  {
    plan: "Get Moving",
    totalWeeks: "12 Weeks",
    schedule: [
      {
        sunday: "REST",
        monday: "Core Workout",
        tuesday: "20-30 min cardio",
        wednesday: "Upper Body Workout",
        thursday: "20-30 min cardio",
        friday: "Total Body Workout",
        saturday: "20-30 min cardio"
      }
    ],
  },
  {
    plan: "Build Muscle",
    totalWeeks: "12 Weeks",
    schedule: [
      {
        sunday: "REST",
        monday: "Chest and Triceps",
        tuesday: "Back and Biceps",
        wednesday: "1 Hour Cardio",
        thursday: "Shoulders and Forearms",
        friday: "Legs",
        saturday: "Rest"
      }
    ],
  },
  {
    plan: "Lose Weight",
    totalWeeks: "12 Weeks",
    schedule: [
      {
        sunday: "REST",
        monday: "Core Workout",
        tuesday: "30-40 min cardio",
        wednesday: "Upper Body Workout",
        thursday: "30-40 min cardio",
        friday: "Total Body Workout",
        saturday: "50-60 min cardio"
      }
    ]
  }
];

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

app.use(express.static('./'));
app.use(cookieParser());
app.use(express.static(__dirname + '/../images'));

app.get('/', function(req, res) {
  if(req.cookies.loggedin === 'true') {
  res.sendFile(__dirname + '/dashboard.html');
  } else {
    res.sendFile(__dirname + '/home.html');
  }
});

app.get('/plans', function(req, res) {
  res.json(workoutPlans);
})

app.get('/logout', jsonParser, function(req, res) {
  if(req.cookies.loggedin == 'true') {
    res.clearCookie('loggedin');
    res.redirect('/');
  }
});

app.post('/login', jsonParser, function(req, res) {
  if(req.body.email == 'alysiasaquil@gmail.com' && req.body.password === 'password') {
    res.cookie('loggedin', 'true');
    res.json({success: true, message: 'You will be directed to dashboard'});
  } else {
    res.json({success: false, message: 'Invalid login'});
  }
})

app.post('/plans', function(req, res) {
})

app.listen(8080);
