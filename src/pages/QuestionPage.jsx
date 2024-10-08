import { useParams } from "react-router-dom";

function Questions() {
  const { questionId } = useParams();
  console.log(questionId);
  return <section className="question-section">adsa</section>;
}

export default Questions;
