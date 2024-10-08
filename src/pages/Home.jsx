import { useNavigate } from "react-router-dom";

function Home({ questions }) {
  const navigate = useNavigate();
  return (
    <main>
      <section className="section-home">
        <div className="image-container">
          <img
            src="/img/rectangle-2.png"
            alt="Home-image"
            className="main-image"
          />
        </div>
        <div className="home-text">
          <h1 className="heading-primary">
            Build a self care routine suitable for you
          </h1>
          <h3 className="heading-secondary">
            Take out test to get a personalised self care routine bassed on your
            needs.
          </h3>
          <button
            className="home-button"
            onClick={() => navigate(`/question/${questions[0].id}`)}
          >
            Start the quiz
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
