'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('rentalCart');
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch (e) {}
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('rentalCart', JSON.stringify(cartItems));
  }, [cartItems]);

const addToCart = (item) => {
  // Generate unique ID for this cart line
  const uniqueId = `${item.machineryId}_${item.startDateTime}_${item.endDateTime}_${Date.now()}`;
  const newItem = { ...item, id: uniqueId };

  setCartItems((prev) => {
    const existingIndex = prev.findIndex(
      (i) =>
        i.machineryId === item.machineryId &&
        i.startDateTime === item.startDateTime &&
        i.endDateTime === item.endDateTime
    );
    if (existingIndex !== -1) {
      const updated = [...prev];
      updated[existingIndex].quantity += item.quantity;
      toast.success(`Updated quantity for ${item.title}`);
      return updated;
    }
    toast.success(`Added ${item.title} to cart`);
    return [...prev, newItem];
  });
};

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.success('Item removed from cart');
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info('Cart cleared');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);