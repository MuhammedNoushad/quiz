const question = document.querySelector("#question");
const options = document.querySelectorAll(".option");
const nextButton = document.querySelector("#next-btn");
const optionsControll = document.querySelector("#options");
let score = document.querySelector("#score");
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Earth", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
    answer: "Mitochondria",
  },
];

const nextQuestion = () => {
  options.forEach((option) => {
    option.classList.remove("correct", "wrong");
  });

  const randomNumber = Math.floor(Math.random() * quizData.length);
  const currentQuestion = quizData[randomNumber];
  const questionRandom = currentQuestion.question;
  const optionsRandom = currentQuestion.options;
  const answerRandom = currentQuestion.answer;

  question.innerText = questionRandom;

  options.forEach((option, index) => {
    option.innerText = optionsRandom[index];
  });

  const checkTheAnswer = (event) => {
    const userSelectAnswer = event.target.closest(".option");
    if (userSelectAnswer) {
      if (userSelectAnswer.innerText === answerRandom) {
        userSelectAnswer.classList.add("correct");
        console.log("correct");

        score.innerText = Number(score.innerText) + 1;
      } else {
        userSelectAnswer.classList.add("wrong");
        console.log("wrong");
      }
      optionsControll.removeEventListener("click", checkTheAnswer);
    }
  };

  optionsControll.addEventListener("click", checkTheAnswer);
};

nextButton.addEventListener("click", nextQuestion);
