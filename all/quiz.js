(function() {
    const myQuestions = [
      {
        question: "What is Html?",
        answers: {
          a: "Hyper Text Mark up Language",
          b: "Hyperactive Teaching Made up Language",
          c: "All of the above"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the best site ever created?",
        answers: {
          a: "Break the blade",
          b: "Makoko fresh",
          c: "Hope Basket" ,
          d: "Trick question; they're all the best"
        },
        correctAnswer: "d"
      },
      {
        question: "Which of the following is not a css frame work?",
        answers: {
          a: "Sassolone",
          b: "Materialize",
          c: "Boostrap 4" ,
          d: "Bulma"
        },
        correctAnswer: "a"
      },
      {
        question: "Which of the following is not a Javascipt frame work?",
        answers: {
          a: "React",
          b: "Ember",
          c: "Poly" ,
          d: "Meteor"
        },
        correctAnswer: "c"
      },
      {
        question: "How many ways can we style our html element?",
        answers: {
          a: "3",
          b: "1",
          c: "4" ,
          d: "2"
        },
        correctAnswer: "a"
      }
    ];
  
    function buildQuiz() {
      // Html input store
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button in javascript
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "blue";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
    //   resultsContainer.innerHTML = '${numCorrect} out of ${myQuestions.length}';
    //   resultsContainer.style.color = "blue";
    // alert(`${numCorrect} out of ${myQuestions.length}`)
    if(`${numCorrect}` >= 4 && `${numCorrect}` <= 5){
        alert( 'You got '+ `${numCorrect} out of ${myQuestions.length}` + ' ' + 'You did extremely well and Your grade is Excellent');
    }
    else if(`${numCorrect}` > 2 & `${numCorrect}` <= 3 ){
        alert('You got ' + `${numCorrect} out of ${myQuestions.length}`+ ' ' + 'Your grade is credit , put in more effort next time');
    }
    else{
        alert('You got' + `${numCorrect} out of ${myQuestions.length}`+ ' ' + 'You failed but put in more effort next time');
    }
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();