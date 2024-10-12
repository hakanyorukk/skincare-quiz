import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";

/* eslint-disable react/prop-types */
function ProductItem({ product }) {
  const { toggleWishlist, wishlist } = useWishlist();
  console.log(wishlist);

  const [isWhistled, setIsWhistled] = useState(
    wishlist.some((item) => item.id === product.id)
  );

  const handleAddWishlist = (product) => {
    //adding whislist to local storage
    toggleWishlist(product);

    //changing the ui state
    setIsWhistled(!isWhistled);
  };

  return (
    <div className="products-items">
      <div className="products-items-img">
        <img
          src={product?.images[0].src}
          alt="product image"
          className="products-items-img__main"
        />
        <button
          className="products-items-fav"
          onClick={() => handleAddWishlist(product)}
        >
          {isWhistled ? (
            <img src="/img/heart-filled.svg" />
          ) : (
            <img src="/img/heart-outline.svg" />
          )}
        </button>
      </div>
      <div className="products-items__box">
        <h1>{product?.title}</h1>
        <p>$ {product?.variants[0].price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
