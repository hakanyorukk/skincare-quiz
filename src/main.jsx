import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./sass/main.scss";
import { QuizProvider } from "./context/QuizContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </QuizProvider>
  </StrictMode>
);
