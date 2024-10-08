import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Your home page or questions list component
import QuestionPage from "./pages/QuestionPage"; // Component for displaying individual questions
import { questions } from "./utils/utils";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <Link to="/">Home</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home questions={questions} />} />
          {/* Map each question to its own route */}
          {questions.map((q) => (
            <Route
              key={q.id}
              path={`/question/:questionId`}
              element={<QuestionPage question={q} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
