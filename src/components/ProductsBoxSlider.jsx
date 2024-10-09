import { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import ProductItem from "./ProductItem";

function ProductsBoxSlider() {
  const { filteredProducts } = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(0);

  //const dividedArray = divideArrayWithIndices(filteredProducts);

  const nextCards = () => {
    setCurrentIndex(currentIndex + 1);
  };

  function divideArrayWithIndices(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 2) {
      const subArray = arr.slice(i, i + 2).map((item, index) => ({
        value: item,
        originalIndex: i + index,
      }));
      result.push(subArray);
    }
    return result;
  }

  const dividedArray = divideArrayWithIndices(filteredProducts);
  return (
    <div className="products">
      <div className="products-box">
        <div className="products-box-all">
          <div className="products-text">
            <h1>Daily routine</h1>
            <p>
              Perfect for if you&apos;re looking for soft, nourished skin, our
              moisturizing body washes are made with skin-natural nutrients that
              work with your skin to replenish moisture. With a light formula,
              the bubbly lather leaves your skin feeling cleansed and cared for.
              And by choosing relaxing fragrances you can add a moment of calm
              to the end of your day.
            </p>
          </div>
          {dividedArray[currentIndex]?.map((product) => {
            //console.log(product.value.images[0].src);
            return (
              <ProductItem product={product.value} key={product.value.id} />
            );
          })}
        </div>
        <div className="products-box-slider">
          {dividedArray.map((_, index) => (
            <button
              key={index}
              className={`products-box-slider-dots${
                currentIndex === index ? " selected" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="products-button">
        <button onClick={nextCards}>
          <img src="/img/frame.svg" />
        </button>
      </div>
    </div>
  );
}

export default ProductsBoxSlider;
