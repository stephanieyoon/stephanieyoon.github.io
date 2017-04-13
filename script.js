$(document).on("pagecreate","#rps-page",function(event){



var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var reset = document.getElementById("button");
var yourscore = document.getElementById("yourscore");
var cscore = document.getElementById("cscore");
var scoreyou = 0;
var scorec = 0;
var rpsbody1 = document.getElementById("rpsbody1");


function getCompChoice() {
	var choices = ['rock', 'paper', 'scissors'];
	var compChoice = choices[Math.floor(Math.random()*choices.length)];
	return compChoice;
}

rock.addEventListener('click', function () {
	var computerChoice = getCompChoice();

	if (computerChoice === "paper") {
		rpsbody1.innerHTML = 'You picked rock. Computer picked paper. You lose!';
		scoreyou = scoreyou;
		yourscore.innerHTML = scoreyou;
		scorec = scorec + 10;
		cscore.innerHTML = scorec;
		}

	else if (computerChoice === "scissors") {
		rpsbody1.innerHTML = 'You picked rock. Computer picked scissors. You win!';
		scoreyou = scoreyou + 10;
		yourscore.innerHTML = scoreyou;
		scorec = scorec;
		cscore.innerHTML = scorec;
		}	

	else {
		rpsbody1.innerHTML = "You picked rock. Computer picked rock. It's a tie!";
		}

});

paper.addEventListener('click', function (){
	var computerChoice = getCompChoice();

	if (computerChoice === "scissors") {
		rpsbody1.innerHTML = 'You picked paper. Computer picked scissors. You lose!';
		scoreyou = scoreyou;
		yourscore.innerHTML = scoreyou;
		scorec = scorec + 10;
		cscore.innerHTML = scorec;
		}

	else if (computerChoice === "rock") {
		rpsbody1.innerHTML = 'You picked paper. Computer picked scissors. You win!';
		scoreyou = scoreyou + 10;
		yourscore.innerHTML = scoreyou;
		scorec = scorec;
		cscore.innerHTML = scorec;
		}	

	else {
		rpsbody1.innerHTML = "You picked paper. Computer picked paper. It's a tie!";
		}
});

scissors.addEventListener('click', function (){
	var computerChoice = getCompChoice();

	if (computerChoice === "rock") {
		rpsbody1.innerHTML = 'You picked scissors. Computer picked rock. You lose!';
		scoreyou = scoreyou;
		yourscore.innerHTML = scoreyou;
		scorec = scorec + 10;
		cscore.innerHTML = scorec;
		}

	else if (computerChoice === "paper") {
		rpsbody1.innerHTML = 'You picked scissors. Computer picked paper. You win!';
		scoreyou = scoreyou + 10;
		yourscore.innerHTML = scoreyou;
		scorec = scorec;
		cscore.innerHTML = scorec;
		}	

	else {
		rpsbody1.innerHTML = "You picked scissors. Computer picked scissors. It's a tie!";
		}
});

reset.addEventListener('click', function () {
	scoreyou = 0
	yourscore.innerHTML = scoreyou;
	scorec = 0
	cscore.innerHTML = scorec;
	rpsbody1.innerHTML = "Click on one of the three to begin"
});



});