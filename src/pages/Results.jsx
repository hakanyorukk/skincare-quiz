import { useNavigate } from "react-router-dom";

import ProductsBoxSlider from "../components/ProductsBoxSlider";
import { useQuiz } from "../context/QuizContext";

function Results() {
  const navigate = useNavigate();

  const { clearingAnswers } = useQuiz();

  //console.log(filteredProducts[0].id);
  return (
    <section className="section-results">
      <div className="image-container">
        <img
          src="/img/rectangle-4.png"
          alt="Result-image"
          className="result-image"
        />
      </div>
      <div className="results">
        <div className="results-box">
          <h1 className="heading-primary-result">
            Build you everyday self <br /> care routine.
          </h1>
          <h3 className="heading-secondary-result">
            Perfect for if you&apos;re looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture. With a light formula, the
            bubbly lather leaves your skin feeling cleansed and cared for. And
            by choosing relaxing fragrances you can add a moment of calm to the
            end of your day.
          </h3>
          <button
            className="retake-button"
            onClick={() => {
              clearingAnswers();
              navigate("/");
            }}
          >
            <p>Retake the quiz</p>
          </button>
        </div>
      </div>
      <ProductsBoxSlider />
    </section>
  );
}

export default Results;
