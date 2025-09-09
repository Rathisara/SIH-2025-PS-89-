import React, { useState } from "react";
import Quiz from "./Quiz";

const QuizSelector = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const quizzes = [
    { id: 1, name: "STEM (Maths + Computers + Design)", set: "set1" },
    { id: 2, name: "Science (Bio + Chem + Physics)", set: "set2" },
    { id: 3, name: "Humanities (Economics + Language + History)", set: "set3" },
  ];

  if (selectedQuiz) {
    return <Quiz quizSet={selectedQuiz} />;
  }

  return (
    <div className="quiz-container">
      <h2>Select a Quiz</h2>
      <p>Choose the test that best matches your interest:</p>
      <div className="quiz-options">
        {quizzes.map((q) => (
          <button
            key={q.id}
            className="quiz-btn"
            onClick={() => setSelectedQuiz(q.set)}
          >
            {q.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizSelector;
