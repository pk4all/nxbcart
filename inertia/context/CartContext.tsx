// src/context/CartContext.js
import React, { createContext, useState,useContext,useEffect } from 'react';
import { Product } from '~/types';
interface CartItem extends Product {
    quantity: number;
}
interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    handleMinus:(product: Product) => void;
    handlePlus:(product: Product) => void;
    addToWishList:(product: Product) => void;
    clearCart: () => void;
    totalPrice:number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
  
    // Add item to cart
    const addToCart = async (product: Product) => {
        await setCart((prevCart) => {
            const existingItem = prevCart[product.id];
            if (existingItem) {
              let cd = {
                ...prevCart,
                [product.id]: { ...existingItem, quantity: existingItem.quantity + 1 },
              };
              saveCart(cd);
              return cd;
            } else {
              let cd = {
                ...prevCart,
                [product.id]: { ...product, quantity: 1 },
              };
              saveCart(cd);
              return cd;
            }
          }); 
    };
  
    // Remove item from cart
    const removeFromCart = async (id: number) => {
         setCart((prevCart) => {
          const newCart = { ...prevCart };
          delete newCart[id]; // Remove the item from the cart
          saveCart(newCart);
          return newCart;
        });
        
      };
  
    // Update item quantity
    const updateQuantity = (id: number, quantity: number) => {
        setCart((prevCart) =>{
          let cd ={
            ...prevCart,
            [id]: { ...prevCart[id], quantity },
          };
          saveCart(cd);
          return cd;
        });
      };

      const handleMinus = (product: Product) => {
            let qty = cart[product?.id]?.quantity;
            if(qty==1) return;
            setCart((prevCart) => {
                const existingItem = prevCart[product.id];
                if (existingItem) {
                  let cd = {
                    ...prevCart,
                    [product.id]: { ...existingItem, quantity: existingItem.quantity - 1 },
                  };
                  saveCart(cd);
                  return cd
                } else {
                  let cd ={
                    ...prevCart,
                    [product.id]: { ...product, quantity: 1 },
                  };
                  saveCart(cd);
                  return cd; 
                }
              });
            //  saveCart(cart);
      };
      const handlePlus = (product: Product) => {
            let qty = cart[product?.id]?.quantity;
            setCart((prevCart) => {
                const existingItem = prevCart[product.id];
                if (existingItem) {
                  let cd = {
                    ...prevCart,
                    [product.id]: { ...existingItem, quantity: existingItem.quantity + 1 },
                  };
                  saveCart(cd);
                  return cd;
                } else {
                  let cd = {
                    ...prevCart,
                    [product.id]: { ...product, quantity: 1 },
                  };
                  saveCart(cd);
                  return cd;
                }
            });
      };
      // Clear cart
      const clearCart = () => {
        setCart([]);
        saveCart([]);
      };

      const saveCart = async (data:any) => {
        await fetch('/api/cart/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cart:data }),
        });
      };
      const loadCart = async () => {
        const response = await fetch('/api/cart/load');
        const data = await response.json();
        setCart(data.cart || []);

      };
      const addToWishList = (product: Product) => {
           // console.log('added to wishlist',product?.id)
      };

      useEffect(() => {
        loadCart();
      }, []);
  
    
    const totalPrice = Object.values(cart).reduce((acc, item:any) => acc + item?.productPrice.sale_price * item.quantity, 0);
    //console.log(totalPrice,'totalPrice',cart)
    return (
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, handleMinus, handlePlus,addToWishList,totalPrice }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };

export default CartContext;
