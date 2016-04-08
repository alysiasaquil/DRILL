var getPlanOne = document.getElementById('panelOneButton');
var getPlanTwo = document.getElementById('panelTwoButton');
var getPlanThree = document.getElementById('panelThreeButton');
var createButton = document.getElementById('create');
var planTypes = document.getElementById('planTypes');
var createMsg = document.getElementById('createMsg');
var getMoving = document.getElementById('panelOne');
var buildMuscle = document.getElementById('panelTwo');
var loseWeight = document.getElementById('panelThree');
var mvGenResults = document.getElementsByClassName('genResults')[0];
var bmGenResults = document.getElementsByClassName('genResults')[1];
var lwGenResults = document.getElementsByClassName('genResults')[2];
var homePanels = document.getElementById('homePanels');

createButton.addEventListener('click', function(event) {
  event.preventDefault();

  createMsg.setAttribute('class', 'show');
  planTypes.setAttribute('class', 'show');
  homePanels.setAttribute ('class', 'container hide');
  var welcome = document.getElementById('welcome');
})

function removeDiv(divId) {
  $("#"+divId).remove();
}


var mvNext = document.getElementsByClassName('page2')[0];
var mvSecondNext = document.getElementsByClassName('page3')[0];
var mvThirdNext = document.getElementsByClassName('page4')[0];
var mvGenerate = document.getElementsByClassName('page5')[0];
var mvSubmit = document.getElementsByClassName('submitPlan')[0];
var mvIntro = document.getElementsByClassName('intro')[0];
var mvLevel = document.getElementsByClassName('level')[0];
var mvGoal = document.getElementsByClassName('goal')[0];
var mvDays = document.getElementsByClassName('days')[0];
var mvSummary = document.getElementsByClassName('summary')[0];
var mvSubmit = document.getElementById('mvSubmit')
var levelValue = document.getElementsByName('level');
var goalValue = document.getElementsByName('goal');
var daysValue = document.getElementsByName('day');
var attachSummary = document.getElementById('mvSummary');
var mvSummaryList = document.createElement('ul');
var mvWorkoutLevel = document.createElement('li');
var mvWorkoutGoal = document.createElement('li');
var mvWorkoutDays = document.createElement('li');
var displayPlan = document.getElementById('displayPlan');
var selectedLevel;
var selectedGoal;
var selectedDays;


getPlanOne.addEventListener('click', function() {
  var createMove = document.getElementById('getMoving');

  createMsg.className = "hide";
  getMoving.className = "hide";
  createMove.className = "show";
  buildMuscle.className = "hide";
  loseWeight.className = "hide";
});

mvNext.addEventListener('click', function() {
  mvIntro.className = "hide";
  mvLevel.className = "show";
});

mvSecondNext.addEventListener('click', function(event) {
  event.preventDefault();
  mvLevel.className = "hide";
  mvGoal.className = "show";

  for (var i = 0; i < levelValue.length; i++) {
    if(levelValue[i].checked) {
      selectedLevel = levelValue[i].value;
      console.log(selectedLevel);
    }
  }

  mvWorkoutLevel.textContent = "Workout Level: " + selectedLevel;
  mvWorkoutLevel.className = "list-unstyled";
  mvSummaryList.appendChild(mvWorkoutLevel);
  attachSummary.appendChild(mvSummaryList);
});

mvThirdNext.addEventListener('click', function(event) {
  event.preventDefault();
  mvGoal.className = "hide";
  mvDays.className = "show";

  for (var i = 0; i < goalValue.length; i++) {
    if(goalValue[i].checked) {
      selectedGoal = goalValue[i].value;
      console.log(selectedGoal);
    }
  }
  mvWorkoutGoal.textContent = " Workout Goal: " + selectedGoal + "     ";
  mvWorkoutGoal.className = "list-unstyled";
  mvWorkoutLevel.appendChild(mvWorkoutGoal);
});

mvGenerate.addEventListener('click', function(event) {
  event.preventDefault();
  mvDays.className = "hide";
  mvSummary.className = "show";
  mvGenResults.className = "show";

  for (var i = 0; i < daysValue.length; i++) {
    if(daysValue[i].checked) {
      selectedDays = daysValue[i].value;
      console.log(selectedDays);
    }
  }

  mvWorkoutDays.textContent = " Workout Days: " + selectedDays;
  mvWorkoutDays.className = "list-unstyled";
  mvWorkoutGoal.appendChild(mvWorkoutDays);
});

var bmNext = document.getElementsByClassName('page2')[1];
var bmSecondNext = document.getElementsByClassName('page3')[1];
var bmThirdNext = document.getElementsByClassName('page4')[1];
var bmGenerate = document.getElementsByClassName('page5')[1];
var bmSubmit = document.getElementsByClassName('submitPlan')[1];
var bmIntro = document.getElementsByClassName('intro')[1];
var bmLevel = document.getElementsByClassName('level')[1];
var bmGoal = document.getElementsByClassName('goal')[1];
var bmDays = document.getElementsByClassName('days')[1];
var bmSummary = document.getElementsByClassName('summary')[1];
var bmLevelValue = document.getElementsByName('bmLevel');
var bmGoalValue = document.getElementsByName('bmGoal');
var bmDaysValue = document.getElementsByName('bmDay')
var bmAttachSummary = document.getElementById('bmSummary');
var bmSummaryList = document.createElement('ul')
var bmWorkoutLevel = document.createElement('li');
var bmWorkoutGoal = document.createElement('li');
var bmWorkoutDays = document.createElement('li');
var bmSelectedLevel;
var bmSelectedGoal;
var bmSelectedDays;

getPlanTwo.addEventListener('click', function() {
  var createBuild = document.getElementById('buildMuscle');

  createMsg.className = "hide";
  getMoving.className = "hide";
  createBuild.className = "show";
  buildMuscle.className = "hide";
  loseWeight.className = "hide";
});

bmNext.addEventListener('click', function() {
  bmIntro.className = "hide";
  bmLevel.className = "show";
})

bmSecondNext.addEventListener('click', function(event) {
  event.preventDefault();
  bmLevel.className = "hide";
  bmGoal.className = "show";

  for(var i = 0; i < bmLevelValue.length; i++) {
    if(bmLevelValue[i].checked) {
      bmSelectedLevel = bmLevelValue[i].value;
    }
  }
  bmWorkoutLevel.textContent = "Workout Level: " + bmSelectedLevel;
  bmWorkoutLevel.className = "list-unstyled";
  bmSummaryList.appendChild(bmWorkoutLevel);
  bmAttachSummary.appendChild(bmSummaryList);
})

bmThirdNext.addEventListener('click', function(event) {
  event.preventDefault();
  bmGoal.className = "hide";
  bmDays.className = "show";

  for(var i = 0; i < bmGoalValue.length; i++) {
    if(bmGoalValue[i].checked) {
      bmSelectedGoal = bmGoalValue[i].value;
    }
  }
  bmWorkoutGoal.textContent = "Workout Goal: " + bmSelectedGoal;
  bmWorkoutGoal.className = "list-unstyled";
  bmWorkoutLevel.appendChild(bmWorkoutGoal);
})

bmGenerate.addEventListener('click', function(event) {
  event.preventDefault();
  bmDays.className = "hide";
  bmSummary.className = "show";
  bmGenResults.className = "show";

  for(var i = 0; i < bmDaysValue.length; i++) {
    if(bmDaysValue[i].checked) {
      bmSelectedDays = bmDaysValue[i].value;
    }
  }
  bmWorkoutDays.textContent = "Workout Days: " + bmSelectedDays;
  bmWorkoutDays.className = "list-unstyled";
  bmWorkoutGoal.appendChild(bmWorkoutDays);
})

var lwNext = document.getElementsByClassName('page2')[2];
var lwSecondNext = document.getElementsByClassName('page3')[2];
var lwThirdNext = document.getElementsByClassName('page4')[2];
var lwGenerate = document.getElementsByClassName('page5')[2];
var lwSubmit = document.getElementsByClassName('submitPlan')[2];
var lwIntro = document.getElementsByClassName('intro')[2];
var lwLevel = document.getElementsByClassName('level')[2];
var lwGoal = document.getElementsByClassName('goal')[2];
var lwDays = document.getElementsByClassName('days')[2];
var lwSummary = document.getElementsByClassName('summary')[2];
var lwLevelValue = document.getElementsByName('lwLevel');
var lwGoalValue = document.getElementsByName('lwGoal');
var lwDaysValue = document.getElementsByName('lwDay');
var lwAttachSummary = document.getElementById('lwSummary');
var lwSummaryList = document.createElement('ul');
var lwWorkoutLevel = document.createElement('li');
var lwWorkoutGoal = document.createElement('li');
var lwWorkoutDays = document.createElement('li');
var lwSelectedLevel;
var lwSelectedGoal;
var lwSelectedDays;


getPlanThree.addEventListener('click', function() {
  var createLose = document.getElementById('loseWeight');

  createMsg.className = "hide";
  getMoving.className = "hide";
  createLose.className = "show";
  buildMuscle.className = "hide";
  loseWeight.className = "hide";
});

lwNext.addEventListener('click', function() {
  lwIntro.className = "hide";
  lwLevel.className = "show";
})

lwSecondNext.addEventListener('click', function(event) {
  event.preventDefault();
  lwLevel.className = "hide";
  lwGoal.className = "show";

  for(var i = 0; i < lwLevelValue.length; i++) {
    if(lwLevelValue[i].checked) {
      lwSelectedLevel = lwLevelValue[i].value;
    }
  }
  lwWorkoutLevel.textContent = "Workout Level: " + lwSelectedLevel;
  lwWorkoutLevel.className = "list-unstyled";
  lwSummaryList.appendChild(lwWorkoutLevel);
  lwAttachSummary.appendChild(lwSummaryList);
})

lwThirdNext.addEventListener('click', function(event) {
  event.preventDefault();
  lwGoal.className = "hide";
  lwDays.className = "show";

  for(var i = 0; i < lwGoalValue.length; i++) {
    if(lwGoalValue[i].checked) {
      lwSelectedGoal = lwGoalValue[i].value;
    }
  }
  lwWorkoutGoal.textContent = "Workout Goal: " + lwSelectedGoal;
  lwWorkoutGoal.className = "list-unstyled";
  lwWorkoutLevel.appendChild(lwWorkoutGoal);
})

lwGenerate.addEventListener('click', function(event) {
  event.preventDefault();
  lwDays.className = "hide";
  lwSummary.className = "show";
  lwGenResults.className = "show";

  for(var i = 0; i < lwDaysValue.length; i++) {
    if(lwDaysValue[i].checked) {
      lwSelectedDays = lwDaysValue[i].value;
    }
  }
  lwWorkoutDays.textContent = "Workout Days: " + lwSelectedDays;
  lwWorkoutDays.className = "list-unstyled";
  lwWorkoutGoal.appendChild(lwWorkoutDays);
})
