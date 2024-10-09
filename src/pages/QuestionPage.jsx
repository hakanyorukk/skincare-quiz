import { useParams } from "react-router-dom";
import CircularProgress from "../components/CircularProgress";
import QuestionItem from "../components/QuestionItem";

function Questions() {
  const { questionId } = useParams();
  const totalQuestions = 5;
  const currentQuestion = questionId;

  //console.log(products);
  //console.log(filteredProducts);

  //console.log(questionId);
  return (
    <section className="question-section">
      <main className="question">
        <QuestionItem questionId={questionId} />

        <div className="question-progressbar">
          <CircularProgress
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />
        </div>
      </main>
    </section>
  );
}

export default Questions;
