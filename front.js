var userSignIn = document.getElementById('username');
var userPassword = document.getElementById('password');
var signInButton = document.getElementById('signIn');


signInButton.addEventListener('click', function(event) {
  event.preventDefault();

  var credentials = {
    username: userSignIn.value,
    password: userPassword.value
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
