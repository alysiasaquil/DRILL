var getPlanOne = document.getElementById('panelOneButton');
var getPlanTwo = document.getElementById('panelTwoButton');
var getPlanThree = document.getElementById('panelThreeButton');
var createButton = document.getElementById('create');
var planTypes = document.getElementById('planTypes');

createButton.addEventListener('click', function() {

  chooseMsg.setAttribute('class', 'show');
  planTypes.setAttribute('class', 'show');
})

getPlanOne.addEventListener('click', function() {
  var createMove = document.getElementById('createMove');
  createMove.setAttribute('class', 'show');
});
getPlanTwo.addEventListener('click', function() {
  var buildMuscle = document.getElementById('buildMuscle');
  buildMuscle.setAttribute('class', 'show');
});
getPlanThree.addEventListener('click', function() {
  var loseWeight = document.getElementById('loseWeight');
  loseWeight.setAttribute('class', 'show');
});

function removeDiv(divId) {
  $("#"+divId).remove();
}
