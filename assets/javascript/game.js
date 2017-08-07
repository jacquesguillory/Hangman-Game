
window.onload = function(){



// My Word List
var wordList = [
	"central",
	"intelligence",
	"agency",
	"bane",
	"hothead",
	"friends",
	"doctor",
	"loyalty",
	"fear",
	"darkness",
	"ally",
	"spirit",
	"body",
	"greatest",
	"rarest",
	"birds",
	"bannermen",
	"metal",
	"gear",
	"wolbachia"
	];

//picking random word
var word = wordList[Math.floor(Math.random() * wordList.length)];

// word area
var hang = document.getElementById("word");

// letters guessed area
var guessArea = document.getElementById("guesses");

// guesses left area
var countdownArea = document.getElementById("guessCounter");

// my guesses
var guesses = [];

// my empty word array
var emptyWord = [];

// my guesses remaining variable
var countdown = 20;
countdownArea.innerHTML = countdown;


// creating empty word space
for (i=0; i<word.length; i++){
	emptyWord.push(" _ ");
	hang.innerHTML = emptyWord.join(" ");
}

// function to run when key pressed
document.onkeypress = function(k) {
	var letterGuess = k.key;
	var progressWord = "";
	// guess display area
	guesses.push(letterGuess);
	guessArea.innerHTML = guesses.join(" ");
	
	// comparing guesses to word
	for (i = 0; i < word.length; i++) {
		if (letterGuess === word[i]){
			emptyWord[i] = word[i];
			hang.innerHTML = emptyWord.join(" ");
			progressWord = emptyWord.toString().replace(/\,/g,"");
			
		}

	}

	countdown = countdown - 1;
	countdownArea.innerHTML = countdown;

	// if all letters guessed correctly
	if (progressWord === word) {
		alert("You got the word right! It was " + word +"!");
		alert("'Hey dude, thanks for saving me.'   -The President");
		location.reload();
	}

	// if all countdown hits 0
	if (countdown === 0){
		alert("Why don't you give it another shot dude?");
		location.reload();
	}

}
console.log(word);





}