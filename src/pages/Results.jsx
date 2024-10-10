import { useNavigate } from "react-router-dom";

import ProductsBoxSlider from "../components/ProductsBoxSlider";

function Results() {
  const navigate = useNavigate();

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
            Build you everyday self care routine.
          </h1>
          <h3 className="heading-secondary-result">
            Perfect for if you&apos;re looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture. With a light formula, the
            bubbly lather leaves your skin feeling cleansed and cared for. And
            by choosing relaxing fragrances you can add a moment of calm to the
            end of your day.
          </h3>
          <button className="retake-button" onClick={() => navigate("/")}>
            Retake the quiz
          </button>
        </div>
      </div>
      <ProductsBoxSlider />
    </section>
  );
}

export default Results;
