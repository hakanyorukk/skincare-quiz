import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from local storage on mount
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Save wishlist to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add/remove item from wishlist
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find((item) => item.id === product.id)) {
        // Remove item if it exists
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        // Add item if it doesn't exist
        return [...prevWishlist, product];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
