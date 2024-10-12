import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";
import Results from "./pages/Results";
import { questions } from "./utils/data";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
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
