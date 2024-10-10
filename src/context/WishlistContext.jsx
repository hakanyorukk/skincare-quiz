import { createContext, useContext } from "react";

// Create WishlistContext
const WishlistContext = createContext();

// Hook to access the wishlist context
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  // Load wishlist from local storage
  const getWishlist = () => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  };

  // Save wishlist to local storage
  const saveWishlist = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  // Toggle item in the wishlist (add/remove)
  const toggleWishlist = (product) => {
    const wishlist = getWishlist();

    const updatedWishlist = wishlist.find((item) => item.id === product.id)
      ? wishlist.filter((item) => item.id !== product.id) // Remove if already in the wishlist
      : [...wishlist, product]; // Add if not in the wishlist

    saveWishlist(updatedWishlist); // Save updated wishlist in local storage
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist: getWishlist(), toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
