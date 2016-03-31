var workoutPlan = [
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

  planTypes.className = "show";
})
