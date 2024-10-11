import { useNavigate } from "react-router-dom";
import { questions } from "../utils/data";

function HomeContent() {
  const navigate = useNavigate();
  return (
    <section className="section-home">
      <div className="image-container">
        <img
          src="/img/rectangle-2.png"
          alt="Home-image"
          className="main-image"
        />
      </div>
      <div className="home-text">
        <div className="home-text-box">
          <h1 className="heading-primary-home">
            Build a self care routine <br /> suitable for you
          </h1>
          <h3 className="heading-secondary-home">
            Take out test to get a personalised self care <br /> routine bassed
            on your needs.
          </h3>
          <button
            className="home-button"
            onClick={() => navigate(`/question/${questions[0]?.id}`)}
          >
            Start the quiz
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
