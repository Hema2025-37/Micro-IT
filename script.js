const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
      answer: "Blue Whale"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Oganesson", "Oxide"],
      answer: "Oxygen"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
      options: ["China", "Japan", "Brazil", "Russia"],
      answer: "Japan"
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2"
    },
    {
      question: "Which language is primarily spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "English"],
      answer: "Portuguese"
    },
    {
      question: "What does CPU stand for?",
      options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processor Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific"
    },
    {
      question: "What is the boiling point of water (in Celsius)?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent Van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide"
    }
  ];
  
let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  document.getElementById("nextBtn").disabled = false;
  Array.from(document.getElementById("options").children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("nextBtn").disabled = true;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
}

document.getElementById("nextBtn").disabled = true;
showQuestion();
