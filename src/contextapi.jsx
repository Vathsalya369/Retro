import {createContext, useContext, useState, useEffect} from 'react';

const CartContext=createContext();

export const useCart=()=>{
    const context = useContext(CartContext);
    if (context === null) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };

export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState(()=>{
        try {
            const savedCart = localStorage.getItem('cartItems');
            return savedCart ? JSON.parse(savedCart) : {};
          } catch (error) {
            console.error("Error parsing cart from localStorage:", error);
            return {};
          }
    });

    useEffect(()=>{
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
          } catch (error) {
            console.error("Error saving cart to localStorage:", error);
          }
        }, [cartItems]);

    const addToCart=(itemName)=>{
        setCartItems(prev=>({
            ...prev,
            [itemName]:(prev[itemName]||0)+1
        }));
    };

    const removeFromCart=(itemName)=>{
        setCartItems(prevItems=>{
            const newItems={...prevItems};
            if(newItems[itemName]>0){
                newItems[itemName]-=1;
                if(newItems[itemName]===0){
                    delete newItems[itemName];
                }
            }
            return newItems;
        });
    };

    const getItemQuantity=(itemName)=>{
        return cartItems[itemName]||0;
    };


    const getTotalItems=()=>{
        return Object.values(cartItems).reduce((total, quantity)=>total+quantity,0);
    };

    const hasItems=()=>{
        return getTotalItems()>0;
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, getItemQuantity, getTotalItems, hasItems}}>
            {children}
        </CartContext.Provider>
    );
};