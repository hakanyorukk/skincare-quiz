import { createContext, useContext } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const getWishlist = () => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  };

  const saveWishlist = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const toggleWishlist = (product) => {
    const wishlist = getWishlist();

    const updatedWishlist = wishlist.find((item) => item.id === product.id)
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    saveWishlist(updatedWishlist);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist: getWishlist(), toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
