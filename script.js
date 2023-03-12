/* please stay away from my shitty js */

const stuffDiv = document.getElementById("stuff");
var gecs = 10000
var sound = new Audio("ping.mp3");

function appendText() {
	if (gecs > -1) {
		const br = document.createElement("br");
		const text = document.createTextNode(`${gecs} gecs`);
		gecs -= 1;
		stuffDiv.appendChild(br);
		stuffDiv.appendChild(text);
		window.scrollTo(0, document.body.scrollHeight);
	} else {
		const br = document.createElement("br");
		const text = document.createTextNode(`finally freaking done`);
		stuffDiv.appendChild(br);
		stuffDiv.appendChild(text);
		window.scrollTo(0, document.body.scrollHeight);
		clearInterval(gecometer);
	}
	sound.play();
}

function getGexOnN64Today() {
	document.getElementsByTagName('button')[0].style.display = 'none'
	gecometer = setInterval(appendText, 777);
}