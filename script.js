// Questions that will be asked
const Questions = [{
	q: "Which is not a mario character?",
	a: [{ text: "Bowser", isCorrect: false },
	{ text: "Peach", isCorrect: false },
	{ text: "Amy", isCorrect: true },
	{ text: "Hammer Bro", isCorrect: false }
	]

},
{
	q: "What color is Waluigis hat?",
	a: [{ text: "Blue", isCorrect: false, isSelected: false },
	{ text: "Green", isCorrect: false },
	{ text: "Yellow", isCorrect: false },
	{ text: "Purple", isCorrect: true }
	]

},
{
	q: "What is the correct saying?",
	a: [{ text: "Princess has been kidnapped!", isCorrect: false },
	{ text: "Bowser captured peach!", isCorrect: false },
	{ text: "Your princess is in another castle!", isCorrect: true },
	{ text: "Peach is in another castle!", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
