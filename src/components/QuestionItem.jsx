import { useNavigate } from "react-router-dom";

import { useQuiz } from "../context/QuizContext";
import { questions } from "../utils/data";
import toast from "react-hot-toast";

function QuestionItem({ questionId }) {
  const navigate = useNavigate();

  const { answers, updateAnswer } = useQuiz();
  console.log(Number([answers].length));
  console.log(questionId);

  const handleNextQuestion = () => {
    if (!answers[questionId]) {
      toast.error("Please select an answer.");
      return;
    }

    if (questionId - 1 === totalQuestions - 1) {
      navigate(`/results`);
    } else {
      navigate(`/question/${questions[questionId].id}`);
    }
  };

  const totalQuestions = 5;
  return (
    <div className="question-box" key={questionId}>
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
        <button
          className="question-box__buttons__forward"
          onClick={handleNextQuestion}
        >
          {questionId - 1 === totalQuestions - 1 ? (
            <span>Discover your results</span>
          ) : (
            <span>
              Next question <img src="/img/arrow.svg" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default QuestionItem;
