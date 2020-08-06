function populate() {
  if (quiz.isEnded()) {
    showScores()
  } else {
    // show question
    var element = document.getElementById("question")
    element.innerHTML = quiz.getQuestionIndex().text

    // show options
    var choices = quiz.getQuestionIndex().choices
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i)
      element.innerHTML = [choices[i]] ? choices[i] : choices[i]
      guess("btn" + i, choices[i])
    }

    showProgress()
  }
}

function guess(id, guess) {
  var button = document.getElementById(id)
  button.onclick = function() {
    quiz.guess(guess)
    populate()
  }
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1
  var element = document.getElementById("progress")
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length
}

function showScores() {
  var gameOverHTML = "<h1>Result</h1>"
  gameOverHTML +=
    "<h2 id='score'> Your scores: " +
    quiz.score +
    "</h2>" +
    '<img src="https://i.pinimg.com/originals/6e/f5/b5/6ef5b552566ccea3114b2780fb34dd27.gif" />' +
    '    <a href="quiz.html"> <p>Start Over</p></a>'
  var element = document.getElementById("quiz")
  element.innerHTML = gameOverHTML
}

// my questions:
var questions = [
  new Question(
    '<img src="https://www.stylist.co.uk/images/app/uploads/2020/02/26074202/studio-ghibli-live-audience-crop-1582703070-1680x880.png?w=1680&h=880&fit=max&auto=format%2Ccompress"/> <h3>In the movie The Moving Castle Sofi falls in love, but in who?</h3>',
    ["Hauru", "Kokuô", "Marukuru", "Arechi"],
    "Hauru"
  ),
  new Question(
    '<img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2017/07/Princess-Mononoke-Studio-Ghibli-San-Hayao-Miyazaki-e1550354288197.jpg"/> <h3>Is San in princess mononoke kind of hot?</h3>',
    ["I dont know", "Totally", "Hell nah", "Well.."],
    "Totally"
  ),

  new Question(
    '<img src="https://i.pinimg.com/564x/ea/7e/11/ea7e114e8b44f17b08ee156c7e41a7a3.jpg"/> <h3>What is the name of the cat?</h3>',
    ["Lolo", "Jiji", "Yoki", "Nini"],
    "Jiji"
  ),

  new Question(
    "<img src='https://pbs.twimg.com/media/DZjQqfEU8AEuBvJ.jpg' /> <h3>From which movie is this scene from? </h3>",
    [
      "Kikis Delivery Service",
      "Castle in the Sky",
      "The Cat Returns",
      "Ocean Waves"
    ],
    "Ocean Waves"
  ),
  new Question(
    '<img src="https://pbs.twimg.com/media/CvQHD4DXgAE-rVv.jpg"/> <h3>In the movie Spirited away Haku founds out what his real name is, what is Hakus real name? </h3>',
    ["Chohaku", "Kohaku", "Kahaku", "Lohaku"],
    "Kohaku"
  )
]

function Question(text, choices, answer) {
  this.text = text
  this.choices = choices
  this.answer = answer
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice
}

function Quiz(questions) {
  this.score = 0
  this.questions = questions
  this.questionIndex = 0
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex]
}

Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++
  }

  this.questionIndex++
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length
}

// create quiz
var quiz = new Quiz(questions)

// display quiz
populate()
