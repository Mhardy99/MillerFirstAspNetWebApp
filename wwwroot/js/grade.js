//getting information
var submit = document.getElementById("calcButton");

submit.addEventListener("click", function () {
    //getting information
    var submit = document.getElementById("calcButton");
    var assignGrade = document.getElementById("assignment").value;
    var projectGrade = document.getElementById("project").value;
    var quizGrade = document.getElementById("quiz").value;
    var examGrade = document.getElementById("exam").value;
    var intexGrade = document.getElementById("intex").value;
    var sumgrades = assignGrade + projectGrade + quizGrade + examGrade + intexGrade;
    //weights
    var assignWeight = .5;
    var projectWeight = .1;
    var quizWeight = .1;
    var examWeight = .2;
    var intexWeight = .1;
    // multiplying stuff
    var finalAssignGrade = assignGrade * assignWeight;
    var finalProjectGrade = projectGrade * projectWeight;
    var finalQuizGrade = quizGrade * quizWeight;
    var finalExamGrade = examGrade * examWeight;
    var finalIntexGrade = intexGrade * intexWeight;
//Getting total grade
    var totalGrade = finalAssignGrade + finalProjectGrade + finalQuizGrade + finalExamGrade + finalIntexGrade;

    if (totalGrade >= 94) {
        alert('You got an A and your numeric grade is '+ totalGrade)
    }
    else if (totalGrade >= 90) {
        alert("You got an A- and your numeric grade is " + totalGrade)
    }
    else if (totalGrade >= 87) {
        alert("You got a B+ " + totalGrade)
    }
    else if (totalGrade >= 84) {
        alert("You got a B and your numeric grade is " + totalGrade)
    }
    else if (totalGrade >= 80) {
        alert("You got a B- and your numeric grade is " + totalGrade)
    }
    else if (totalGrade >= 77) {
        alert("You got a C+ and your numeric grade is " + totalGrade)
    }
    else if (totalGrade >= 74) {
        alert("You got a C and your numeric grade is " + totalGrade)
    }
    else if (totalGrade >= 70) {
        alert("You got a C- and your numeric grade is " + totalGrade)
    }
    else if (totalGrade >= 67) {
        alert("You got a D+ and your numeric grade is " + totalGrade)
    }
    else if (totalGrade >= 64) {
        alert("You got a D and your numeric grade is " + totalGrade)
    }
    else if (totalGrade >= 60) {
        alert("You got a D- and your numeric grade is " + totalGrade)
    }
    else {
        alert("You got an E and your numeric grade is " + totalGrade)
    }
})