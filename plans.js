var getPlanOne = document.getElementById('panelOneButton');
var getPlanTwo = document.getElementById('panelTwoButton');
var getPlanThree = document.getElementById('panelThreeButton');
var createButton = document.getElementById('create');
var planTypes = document.getElementById('planTypes');
var chooseMsg = document.getElementById('chooseMsg');

createButton.addEventListener('click', function() {

  chooseMsg.setAttribute('class', 'show');
  planTypes.setAttribute('class', 'show');
})

function removeDiv(divId) {
  $("#"+divId).remove();
}
