import { useParams } from "react-router-dom";
import { questions } from "../utils/utils";

function Questions() {
  const { questionId } = useParams();
  console.log(questionId);
  return (
    <section className="question-section">
      <main className="question">
        <div className="question-box">
          <h1 className="question-box__title">
            {questions[questionId - 1].question}
          </h1>
          <div className="question-box__answers">
            {questions[questionId - 1].answers.map((answer, index) => (
              <p key={index} className="question-box__answer">
                {answer}
              </p>
            ))}
          </div>
          <div className="question-box__buttons">
            <button className="question-box__buttons__back">Back</button>
            <button className="question-box__buttons__forward">
              Next question <img src="/img/arrow.svg" />
            </button>
          </div>
        </div>
        <div className="question-progressbar"></div>
      </main>
    </section>
  );
}

export default Questions;
