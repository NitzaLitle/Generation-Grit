//code
// Mentorship Program

// 1. Global Variables

let mentor, mentee; // Two individuals in the mentorship program

// 2. Constructors

function Mentor(name, experience) {
  this.name = name;
  this.experience = experience;
}

function Mentee(name, skillLevel) {
  this.name = name;
  this.skillLevel = skillLevel;
}

// 3. Prototype Methods

Mentor.prototype.teach = function(mentee) {
  mentee.skillLevel += 1;
  console.log(
    `${this.name} has taught ${mentee.name} a new skill. Skill level is now ${mentee.skillLevel}`
  );
};

Mentor.prototype.listen = function(mentee) {
  console.log(
    `${this.name} is listening to ${mentee.name} and getting new ideas`
  );
};

// 4. Instances

mentor = new Mentor("John Doe", 5);
mentee = new Mentee("Jane Doe", 3);

// 5. Event Handlers

document.getElementById("teachBtn").addEventListener("click", function() {
  mentor.teach(mentee);
});

document.getElementById("listenBtn").addEventListener("click", function() {
  mentor.listen(mentee);
});

// 6. Helper Functions

function checkExperience(mentor) {
  if (mentor.experience < 3) {
    console.log("This mentor needs more experience");
  } else {
    console.log("This mentor is ready to teach");
  }
}

// 7. Event Listeners

window.addEventListener("load", function() {
  checkExperience(mentor);
});