/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import { useQuiz } from "../context/QuizContext";
import { questions } from "../utils/data";

function QuestionItem({ questionId }) {
  const navigate = useNavigate();

  const { answers, updateAnswer } = useQuiz();

  const totalQuestions = 5;
  return (
    <div className="question-box">
      <h1 className="question-box__title">
        {questions[questionId - 1].question}
      </h1>
      <div className="question-box__answers">
        {questions[questionId - 1].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => updateAnswer(questionId, answer)}
            className={`question-box__answer${
              answers[questionId] === answer ? " selected" : ""
            }`}
          >
            <p>{answer}</p>
          </button>
        ))}
      </div>
      <div className="question-box__buttons">
        <button
          className="question-box__buttons__back"
          onClick={() => {
            const prevQuestionId = Number(questionId) - 1;
            if (prevQuestionId > 0) {
              navigate(`/question/${questions[prevQuestionId - 1].id}`);
            }
            if (prevQuestionId === 0) {
              navigate("/");
            }
          }}
        >
          Back
        </button>

        {questionId - 1 === totalQuestions - 1 ? (
          <button
            className="question-box__buttons__forward"
            onClick={() => navigate(`/results`)}
          >
            <span>Discover your results</span>
          </button>
        ) : (
          <button
            className="question-box__buttons__forward"
            onClick={() => navigate(`/question/${questions[questionId].id}`)}
          >
            <span>
              Next question <img src="/img/arrow.svg" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionItem;
