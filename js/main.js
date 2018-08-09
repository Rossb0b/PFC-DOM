var pierre = document.getElementById("pierre");
var papier = document.getElementById("papier");
var ciseaux = document.getElementById("ciseaux");


var scoreU = document.getElementById("scoreU");
var scoreBot = document.getElementById("scoreBot");
/* var choice = Math.random();

function botChoice(choice) {
	if (choice < 0.34) {
		choice = pierre;
	} else if (choice <= 0.67) {
		choice = papier;
	} else {
		choice = ciseaux;
	}
	return choice;
}

var botChoice = botChoice(choice);
console.log(botChoice);

function userChoise() {

}

function choicePierre(botChoice) {
	if (botChoice = pierre) {
		document.getElementById("result").innerHTML = "Egalité !";
	} else if (botChoice = papier) {
		document.getElementById("result").innerHTML = "Perdu !";
		scoreBot++;
	} else {
		document.getElementById("result").innerHTML = "Gagné !";
		scoreU++;
	}
}

function choicePapier(botChoice) {
	if (botChoice = papier) {
		document.getElementById("result").innerHTML = "Gagné ! ";
		scoreU++;
	} else if (botChoice = papier) {
		document.getElementById("result").innerHTML = "Egalité !";
	} else {
		document.getElementById("result").innerHTML = "Perdu !";
		scoreBot++;
	}
}

function choiceCiseaux(botChoice) {
	if (botChoice = ciseaux) {
		document.getElementById("result").innerHTML = "Perdu !";
		scoreBot++;
	} else if (botChoice = papier) {
		document.getElementById("result").innerHTML = "Gagné !";
		scoreU++;
	} else {
		document.getElementById("result").innerHTML = "Egalité !";
	}
} */


var userChoice = document.getElementsByClassName("game-choice");

for (i = 0; i < userChoice.length; i++) {
	userChoice[i].onclick = function() {
		myFunction(this);
	}
}

function myFunction(element) {
	console.log("test");
}