var getPlanOne = document.getElementById('panelOneButton');
var getPlanTwo = document.getElementById('panelTwoButton');
var getPlanThree = document.getElementById('panelThreeButton');
var getMoving = document.getElementById('panelOne');
var buildMuscle = document.getElementById('panelTwo');
var loseWeight = document.getElementById('panelThree');
var createButton = document.getElementById('create');
var planTypes = document.getElementById('planTypes');
var chooseMsg = document.getElementById('chooseMsg');
var nextIntro = document.getElementsByClassName('page2')[0];
var nextLevel = document.getElementsByClassName('page3')[0];
var nextGoals = document.getElementsByClassName('page4')[0];
var generatePlan = document.getElementsByClassName('page5')[0];
var submitPlan = document.getElementsByClassName('submitPlan')[0];
var intro = document.getElementsByClassName('intro')[0];
var level = document.getElementsByClassName('level')[0];
var goal = document.getElementsByClassName('goal')[0];
var days = document.getElementsByClassName('days')[0];
var summary = document.getElementsByClassName('summary')[0];

getPlanOne.addEventListener('click', function() {
  var createMove = document.getElementById('getMoving');

  chooseMsg.className = "hide";
  getMoving.className = "hide";
  createMove.className = "show";
  buildMuscle.className = "hide";
  loseWeight.className = "hide";
});

nextIntro.addEventListener('click', function() {
  intro.className = "hide";
  level.className = "show";
})

nextLevel.addEventListener('click', function() {
  level.className = "hide";
  goal.className = "show";
})

nextGoals.addEventListener('click', function() {
  goal.className = "hide";
  days.className = "show";
})

generatePlan.addEventListener('click', function() {
  days.className = "hide";
  summary.className = "show";
})
