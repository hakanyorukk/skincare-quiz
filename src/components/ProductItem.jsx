import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";

/* eslint-disable react/prop-types */
function ProductItem({ product }) {
  const { toggleWishlist, wishlist } = useWishlist();
  const [fav, setFav] = useState(true);
  const isWishlisted = wishlist.some((item) => item.id === product.id);
  console.log(wishlist);

  const handleAddWishlist = (product) => {
    toggleWishlist(product);
    setFav(wishlist.every((item) => item.id === product.id) && !fav);
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
          {isWishlisted || !fav ? (
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
