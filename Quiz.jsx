import React, { useState } from "react";
import { quizData } from "./quizData";

const Quiz = ({ quizSet }) => {
  const questions = quizData[quizSet];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="quiz-result">
        <h2>Quiz Finished 🎉</h2>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-box">
      <h3>
        Question {current + 1} of {questions.length}
      </h3>
      <p>{questions[current].question}</p>
      <div className="options">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt === questions[current].answer)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
