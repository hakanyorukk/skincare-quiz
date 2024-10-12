import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./sass/main.scss";
import { QuizProvider } from "./context/QuizContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <WishlistProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              padding: "20px",
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
            },
            iconTheme: {
              primary: "#5bc1ed",
              secondary: "#ffffff",
            },
          }}
        />
        <App />
      </WishlistProvider>
    </QuizProvider>
  </StrictMode>
);
