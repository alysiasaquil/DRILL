var welcomeMsg = document.getElementById('welcome');
var getMoving = document.getElementById('panelOne');
var buildMuscle = document.getElementById('panelTwo');
var loseWeight = document.getElementById('panelThree');
var getPlanOne = document.getElementById('panelOneButton');
var getPlanTwo = document.getElementById('panelTwoButton');
var getPlanThree = document.getElementById('panelThreeButton');
var createButton = document.getElementById('create');
var planTypes = document.getElementById('planTypes');
var login = document.getElementById('button');
var chooseMsg = document.getElementById('chooseMsg');
var viewWorkouts = document.getElementById('viewWorkouts');

login.addEventListener('click', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var credentials = {
    username: username,
    password: password
  };
  var payload = JSON.stringify(credentials);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/login');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(payload);

  xhr.addEventListener('load', function() {
    var message = document.getElementById('message');
    var response = JSON.parse(xhr.responseText);

    if(response.success) {
      window.location = "/";
    } else {
      message.textContent = "Invalid username or password";
    }
  })
});
