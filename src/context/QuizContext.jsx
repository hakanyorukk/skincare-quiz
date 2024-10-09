import { createContext, useContext, useEffect, useState } from "react";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions] = useState(5);

  const [products, setProducts] = useState([]);
  //console.log(products);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://jeval.com.au/collections/hair-care/products.json?page=1")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = {
        ...prevAnswers,
        [questionId]: answer,
      };
      return newAnswers;
    });
  };

  const extractRelevantAnswers = (answers) => {
    const relevantAnswers = Object.values(answers)
      .map((answer) => answer.split(". ")[1])
      .filter(Boolean);

    return relevantAnswers;
  };

  useEffect(() => {
    const relevantAnswers = extractRelevantAnswers(answers);

    const matchingProducts = products.filter((product) => {
      return relevantAnswers.some((answer) => {
        const lowerCaseAnswer = answer.toLowerCase();

        const matchesTitle = product.title
          .toLowerCase()
          .includes(lowerCaseAnswer);
        const matchesBodyHtml = product.body_html
          .toLowerCase()
          .includes(lowerCaseAnswer);
        const matchesTags = product.tags.some((tag) =>
          tag.toLowerCase().includes(lowerCaseAnswer)
        );

        return matchesTitle || matchesBodyHtml || matchesTags;
      });
    });
    //console.log(matchingProducts);

    setFilteredProducts(matchingProducts);
  }, [answers, products]);

  const nextQuestion = () => setCurrentQuestion((prev) => prev + 1);
  const prevQuestion = () =>
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <QuizContext.Provider
      value={{
        answers,
        updateAnswer,
        currentQuestion,
        nextQuestion,
        prevQuestion,
        progress,
        totalQuestions,
        products,
        filteredProducts,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
