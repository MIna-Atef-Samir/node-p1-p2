const securityQuestions = [
  {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter",
  },
  {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985",
  },
  {
    question: "What city were you born in?",
    expectedAnswer: "NYC",
  },
];

function chksecurityQuestions(securityQuestions, question, ans) {
  const foundQuestion = securityQuestions.find(
    (sec) => sec.question === question && sec.expectedAnswer === ans
  );
  
  return foundQuestion !== undefined;
}

const cases = [
  { question: "What was your first pet’s name?", ans: "FlufferNutter" },
  { question: "What was your first pet’s name?", ans: "DufferNutter" },
];

const res = cases.map(({ question, ans }) =>
  chksecurityQuestions(securityQuestions, question, ans)
);

console.log(res);
