var pierre = document.getElementById("pierre");
var papier = document.getElementById("papier");
var ciseaux = document.getElementById("ciseaux");


var vieU = 0;
var vieBot = 0;

var userChoice = document.getElementsByClassName("game-choice");

var dNone = document.getElementById("continue").style.display = "none";

for (let i = 0; i < userChoice.length; i++) {
	userChoice[i].onclick = function() {
		myFunction(this);
	}
}

function myFunction(element) {
	console.log(element.id);
	var bot = [Math.floor(Math.random() * userChoice.length)];
	console.log(bot);
	if (element.id === "pierre") {
		console.log("choix 1")
		if (bot == 0) {
			document.getElementById("return").innerHTML = "Egalité ! 👊👊";
			document.getElementById("continue").style.display = "block";
		} else if (bot == 1) {
			document.getElementById("return").innerHTML = "Tu as perdu ! 👊✋";
			vieBot = vieBot +1;
			document.getElementById("scoreBot").innerHTML = vieBot;
			document.getElementById("continue").style.display = "block";
		} else if (bot == 2) {
			document.getElementById("return").innerHTML = "Tu as gagné ! 👊✌";
			vieU = vieU +1;
			document.getElementById("scoreU").innerHTML = vieU;
			document.getElementById("continue").style.display = "block";
		}
	}

	else if (element.id === "papier") {
		console.log("choix 2")
		if (bot == 0) {
			document.getElementById("return").innerHTML = "Tu as gagné ! ✋👊";
			vieU = vieU +1;
			document.getElementById("scoreBot").innerHTML = vieBot;
			document.getElementById("continue").style.display = "block";
		} else if (bot == 1) {
			document.getElementById("return").innerHTML = "Egalité ! ✋✋";
			document.getElementById("continue").style.display = "block";
		} else if (bot == 2) {
			document.getElementById("return").innerHTML = "Tu as perdu ! ✋✌";
			vieBot = vieBot +1;
			document.getElementById("scoreU").innerHTML = vieU;
			document.getElementById("continue").style.display = "block";
		}
	} 

	else {
		console.log("choix 3");
		if (bot == 0) {
			document.getElementById("return").innerHTML = "Tu as perdu ! ✌👊";
			vieBot = vieBot +1;
			document.getElementById("scoreBot").innerHTML = vieBot;
			document.getElementById("continue").style.display = "block";
		} else if (bot == 1) {
			document.getElementById("return").innerHTML = "Tu as gagné ! ✌✋";
			vieU = vieU +1;
			document.getElementById("scoreU").innerHTML = vieU;
			document.getElementById("continue").style.display = "block";
		} else if (bot == 2) {
			document.getElementById("return").innerHTML = "Egalité ! ✌✌";
			document.getElementById("continue").style.display = "block";
		}
	}
	
	if (vieU == 3) {
		vieU = vieU -3;
		vieBot = 0;
		document.getElementById("scoreBot").innerHTML = 0;
		document.getElementById("scoreU").innerHTML = 0;
	} 
	else if (vieBot == 3) {
		vieBot = vieBot -3;
		vieU = 0;
		document.getElementById("scoreBot").innerHTML = 0;
		document.getElementById("scoreU").innerHTML = 0;
	}
}


var scoreU = document.getElementById("scoreU").innerHTML = vieU;
var scoreBot = document.getElementById("scoreBot").innerHTML = vieBot;

function continueOnClick() {
	document.getElementById("return").innerHTML = "";
	document.getElementById("continue").style.display = "none";
	document.getElementById("return").innerHTML = "";
}


document.getElementById('pseudoSub').addEventListener('click', function() {
    var pseudoPlayer = document.getElementById('pseudoInput').value;
    if (pseudoPlayer.length < 4 || pseudoPlayer > 16) {
        errorPseudo('Le pseudo doit contenir entre 4 et 16 caractères');
        return false;
    }
    document.getElementById('pseudoPlayer').innerHTML = pseudoPlayer + " :";
    document.getElementById("pseudo").style.display = "none";
});



function returnMoveX() {
    var elem = document.getElementById("return");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 250;
            elem.style.left = pos + 250;
        }
    }
} 