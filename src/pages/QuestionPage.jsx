import { useParams } from "react-router-dom";
import CircularProgress from "../components/CircularProgress";
import QuestionItem from "../components/QuestionItem";

function Questions() {
  const { questionId } = useParams();

  return (
    <section className="question-section">
      <main className="question">
        <QuestionItem questionId={questionId} />
        <div className="question-progressbar">
          <CircularProgress questionId={questionId} />
        </div>
      </main>
    </section>
  );
}

export default Questions;
