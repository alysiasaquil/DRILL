var getPlanOne = document.getElementById('panelOneButton');
var getPlanTwo = document.getElementById('panelTwoButton');
var getPlanThree = document.getElementById('panelThreeButton');
var getMoving = document.getElementById('panelOne');
var buildMuscle = document.getElementById('panelTwo');
var loseWeight = document.getElementById('panelThree');
var createButton = document.getElementById('create');
var planTypes = document.getElementById('planTypes');
var chooseMsg = document.getElementById('chooseMsg');
var nextIntro = document.getElementsByClassName('page2')[2];
var nextLevel = document.getElementsByClassName('page3')[2];
var nextGoals = document.getElementsByClassName('page4')[2];
var generatePlan = document.getElementsByClassName('page5')[2];
var submitPlan = document.getElementsByClassName('submitPlan')[2];
var intro = document.getElementsByClassName('intro')[2];
var level = document.getElementsByClassName('level')[2];
var goal = document.getElementsByClassName('goal')[2];
var days = document.getElementsByClassName('days')[2];
var summary = document.getElementsByClassName('summary')[2];

getPlanThree.addEventListener('click', function() {
  var createLose = document.getElementById('loseWeight');

  chooseMsg.className = "hide";
  getMoving.className = "hide";
  createLose.className = "show";
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
