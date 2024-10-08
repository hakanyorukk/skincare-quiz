import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Your home page or questions list component
import QuestionPage from "./pages/QuestionPage"; // Component for displaying individual questions

const questions = [
  {
    id: 1,
    question: "What's your hair type or texture?",
    answers: ["Straight", "Curly", "Wavy", "Fine"],
  },
  {
    id: 2,
    question: "How often do you wash your hair?",
    answers: [
      "Daily",
      "Every other day",
      "Twice a week",
      "Once a week",
      "Once every two weeks",
    ],
  },
  {
    id: 3,
    question: "What benefit do you look for in your hair products?",
    answers: [
      "Anti-breakage",
      "Hydration",
      "Soothing dry scalp",
      "Repairs the appearance of damaged hair",
      "Volume",
      "Curl and coil enhancing",
    ],
  },
  {
    id: 4,
    question: "Is there anything troubling you about your hair?",
    answers: ["Breakage", "Frizz", "Scalp dryness", "Damage", "Tangling"],
  },
  {
    id: 5,
    question: "What is your natural hair color(s) today?",
    answers: ["Black", "Brown", "Blonde", "Red/Orange", "Silver/Grey"],
  },
];
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
