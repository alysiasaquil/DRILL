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
login.addEventListener('click', function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var credentials = {
    email: email,
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

    var link = document.createElement('a');
    link.setAttribute('href', '/');

    message.appendChild(link);

    if(response.success) {
      link.textContent = "click here to go to home page";
    } else {
      message.textContent = "Try again";
    }
  })
})
