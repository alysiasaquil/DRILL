var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var signIn = document.getElementById('signIn');
var signInPanel = document.getElementById('signInPanel');
var navbar = document.getElementById('navbar');

signIn.addEventListener('click', function(event) {
  event.preventDefault();

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
    var message = document.getElementById('invalidMessage');
    var link = document.getElementById('link');
    var response = JSON.parse(xhr.responseText);

    if(response.success) {
      link.textContent = "click here to go to home page";
    } else {
      message.textContent = "Invalid Username or password";
    }
  })
})

var chooseMsg = document.getElementById('chooseMsg');
var getMoving = document.getElementById('panelOne');
var buildMuscle = document.getElementById('panelTwo');
var loseWeight = document.getElementById('panelThree');
var getPlanOne = document.getElementById('panelOneButton');
var getPlanTwo = document.getElementById('panelTwoButton');
var getPlanThree = document.getElementById('panelThreeButton');
var findPlan = document.getElementById('find');
var planTypes = document.getElementById('planTypes');

findPlan.addEventListener('click', function(event) {
  event.preventDefault();

  chooseMsg.className = "show row";
  planTypes.className = "show";
})

function removeDiv(divId) {
  $("#"+divId).remove();
}
