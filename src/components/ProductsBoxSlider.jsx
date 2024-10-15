import { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import ProductItem from "./ProductItem";
import { useWishlist } from "../context/WishlistContext";

function ProductsBoxSlider() {
  const { filteredProducts } = useQuiz();
  const { wishlist } = useWishlist();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextCards = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const prevCards = () => {
    setCurrentIndex(currentIndex - 1);
  };

  function divideArrayWithIndices(arr, itemsPerGroup) {
    const result = [];

    for (let i = 0; i < arr.length; i += itemsPerGroup) {
      const subArray = arr.slice(i, i + itemsPerGroup).map((item, index) => ({
        value: item,
        originalIndex: i + index,
      }));
      result.push(subArray);
    }
    return result;
  }

  const sortedProducts = [
    ...wishlist,
    ...filteredProducts.filter(
      (product) => !wishlist.some((item) => item.id === product.id)
    ),
  ];

  const itemsPerGroup = isSmallScreen ? 1 : 2;

  const dividedArray = divideArrayWithIndices(sortedProducts, itemsPerGroup);

  return (
    <div className="products">
      <div className="products-button-prev">
        {currentIndex + 1 >= 2 && (
          <button onClick={prevCards}>
            <img src="/img/frame.svg" alt="Previous" />
          </button>
        )}
      </div>
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

          {dividedArray[currentIndex]?.map((product) => (
            <ProductItem product={product.value} key={product.value.id} />
          ))}
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
      <div className="products-button-next">
        {dividedArray.length !== currentIndex + 1 && (
          <button onClick={nextCards}>
            <img src="/img/frame.svg" alt="Next" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductsBoxSlider;
