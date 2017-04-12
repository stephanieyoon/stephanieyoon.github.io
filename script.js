$(document).on("pagecreate","#rps-page",function(event){



var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var reset = document.getElementById("button");
var yourscore = document.getElementById("yourscore");
var cscore = document.getElementById("cscore");
var scoreyou = 0;
var scorec = 0;
var rpsbody = document.getElementById("rpsbody");
var text = "Click on one of the three to begin";




rock.addEventListener('click', function () {
	text = "You picked rock."
	rpsbody.innerHTML = text
});

paper.addEventListener('click', function (){
	text = "You picked paper."
	rpsbody.innerHTML = text	
});

scissors.addEventListener('click', function (){
	text = "You picked scissors."
	rpsbody.innerHTML = text	
});

reset.addEventListener('click', function () {
	scoreyou = 0
	scorec = 0
	text = "Click on one of the three to begin"
	rpsbody.innerHTML = text
})



});