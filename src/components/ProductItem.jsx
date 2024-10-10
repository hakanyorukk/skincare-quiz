import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";

/* eslint-disable react/prop-types */
function ProductItem({ product }) {
  const { toggleWishlist, wishlist } = useWishlist();
  const [isWishlist, setWishlist] = useState([]);
  const [fav, setFav] = useState(true);
  const isWishlisted =
    wishlist.every((item) => item.id === product.id) || isWishlist;
  console.log(wishlist);
  console.log(isWishlisted);

  const handleAddWishlist = (product) => {
    toggleWishlist(product);

    // const updatedWishlist = wishlist.find((item) => item.id === product.id)
    //   ? wishlist.filter((item) => item.id !== product.id) // Remove if already in the wishlist
    //   : [...wishlist, product]; // Add if not in the wishlist

    // setWishlist(updatedWishlist); // Save updated wishlist in local storage
    setWishlist((prevWishlist) => [...prevWishlist, product]);
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
          className="products-items-img-fav"
          onClick={() => handleAddWishlist(product)}
        >
          {fav && isWishlist ? (
            <img src="/img/heart-outline.svg" />
          ) : (
            <img src="/img/heart-filled.svg" />
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
