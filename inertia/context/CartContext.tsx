// src/context/CartContext.js
import React, { createContext, useState,useContext,useEffect } from 'react';
import { usePage } from "@inertiajs/react";
import { Product } from '~/types';
interface CartItem  { //extends Product
    product_name:string;
    product_slug:string;
    product_image:string;
    sale_price:number;
    price:number;
    total:number;
    product_id:number;
    quantity: number;
}
interface Coupon{
  coupon_code:string;
  coupon_amount:number;
}
interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    handleMinus:(product: Product) => void;
    handlePlus:(product: Product) => void;
    handleMinusInCart:(item: CartItem) => void;
    handlePlusInCart:(item: CartItem) => void;
    addToWishList:(product: Product) => void;
    saveForLater:(product: Product) => void;
    saveForLaterInCart:(item: CartItem) => void;
    clearCart: () => void;
    totalPrice:number;
    totalQuantity:number;
    login:boolean;
    addCoupon:(data:any) => void;
    coupon?:Coupon;
    changeLogin:(p:boolean) => void;
    formatCurrency:(value:number)=>string;
    shipping:number;
    payableAmount:number;

}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [coupon, setCoupon] = useState<Coupon>();
    const [shipping, setShipping] = useState(0);
    const [payableAmount, setPayableAmount] = useState(0);
    
    const [login, setLogin] = useState(false);
    const customer = usePage().props?.customer;

    // Add item to cart
    const addToCart = async (product: Product) => {
        await setCart((prevCart) => {
            const existingItem = prevCart[product.id];
            if (existingItem) {
              let qty = existingItem.quantity + 1;
              let cd = {
                ...prevCart,
                [product.id]: {
                   ...existingItem,
                    quantity:qty,
                    total:(product?.productPrice?.sale_price*qty),
                   },
              };
              saveCart(cd);
              return cd;
            } else {
              let cd = {
                ...prevCart,
                [product.id]: { 
                 // ...product, 
                  product_name:product?.name,
                  product_slug:product?.slug,
                  product_image:product?.productImages[0]?.thum_url,
                  sale_price:product?.productPrice?.sale_price,
                  price:product?.productPrice?.price,
                  product_id:product?.id,
                  total:product?.productPrice?.sale_price,
                  quantity: 1 
                },
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
            [id]: { ...prevCart[id], 
              total:(prevCart[id]?.sale_price*quantity),
              quantity 
            },
          };
          saveCart(cd);
          return cd;
        });
      };

      const handleMinus = (product: Product) => {
            let qty = cart[product?.id]?.quantity;
            if(qty==1) return;
            setCart((prevCart:any) => {
                const existingItem = prevCart[product.id];
                if (existingItem) {
                  let qty = existingItem.quantity - 1;
                  let cd = {
                    ...prevCart,
                    [product.id]: { 
                      ...existingItem, 
                      quantity: qty,
                      total:(product?.productPrice?.sale_price*qty),
                    },
                  };
                  saveCart(cd);
                  return cd
                } else {
                  let cd ={
                    ...prevCart,
                    [product.id]: { 
                     // ...product, 
                     product_name:product?.name,
                     product_slug:product?.slug,
                     product_image:product?.productImages[0]?.thum_url,
                     sale_price:product?.productPrice?.sale_price,
                     price:product?.productPrice?.price,
                     product_id:product?.id,
                     total:product?.productPrice?.sale_price,
                      quantity: 1 
                    },
                  };
                  saveCart(cd);
                  return cd; 
                }
            });
            //  saveCart(cart);
      };
      const handlePlus = (product: Product) => {
            //let qty = cart[product?.id]?.quantity;
            setCart((prevCart:any) => {
                const existingItem = prevCart[product.id];
                if (existingItem) {
                  let qty = existingItem.quantity + 1;
                  let cd = {
                    ...prevCart,
                    [product.id]: { 
                      ...existingItem, 
                      quantity: qty,
                      total:(product?.productPrice?.sale_price*qty),
                     },
                  };
                  saveCart(cd);
                  return cd;
                } else {
                  let cd = {
                    ...prevCart,
                    [product.id]: { 
                      //...product, 
                      product_name:product?.name,
                      product_slug:product?.slug,
                      product_image:product?.productImages[0]?.thum_url,
                      sale_price:product?.productPrice?.sale_price,
                      price:product?.productPrice?.price,
                      product_id:product?.id,
                      total:product?.productPrice?.sale_price,
                      quantity: 1 
                    },
                  };
                  saveCart(cd);
                  return cd;
                }
            });
      };

     const handleMinusInCart=(item: CartItem) => {
          let qty = cart[item?.product_id]?.quantity;
          if(qty==1) return;
          setCart((prevCart:any) => {
            const existingItem = prevCart[item.product_id];
            if (existingItem) {
              let qty = existingItem.quantity - 1;
              let cd = {
                ...prevCart,
                [item.product_id]: { 
                  ...existingItem, 
                  quantity: qty,
                  total:(item.sale_price*qty),
                },
              };
              saveCart(cd);
              return cd
            }
        });
     };
     const handlePlusInCart=(item: CartItem) => {
      setCart((prevCart:any) => {
        const existingItem = prevCart[item.product_id];
        if (existingItem) {
          let qty = existingItem.quantity + 1;
          let cd = {
            ...prevCart,
            [item.product_id]: { 
              ...existingItem, 
              quantity: qty,
              total:(item.sale_price*qty),
            },
          };
          saveCart(cd);
          return cd
        }
    });
     };
      // Clear cart
      const clearCart = () => {
        setCart([]);
        saveCart([]);
      };

      const saveCart = async (data:any) => {
        //console.log('cart',data,totalPrice);
        let totalCartPrice = Object.values(data).reduce((acc:number, item:any) => acc + item?.sale_price * item.quantity, 0);
        let totalCartQuantity = Object.values(data).reduce((acc:number, item:any) => acc + item.quantity, 0);
       let payableAmount = (totalCartPrice+shipping)-(coupon?.coupon_amount||0);
        await fetch('/api/cart/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cart:data,totalPrice:totalCartPrice,totalQuantity:totalCartQuantity,customer,coupon,shipping,payableAmount }),
        });
      };

      const loadCart = async () => {
        const response = await fetch('/api/cart/load');
        const data = await response.json();
        setCart(data?.cart || []);
        console.log(data,'all cart data');
        setCoupon(data?.coupon||{});
        setShipping(data?.shipping||0);
        setPayableAmount(data?.payableAmount||0);
      };
      const addToWishList = (product: Product) => {
          if(!customer){
            setLogin(true);
          }
           // console.log('added to wishlist',product?.id)
      };
      const saveForLater = (product: Product) => {
          if(!customer){
            setLogin(true);
          }
           
        // console.log('added to saveForLater',product?.id)
      };
      const saveForLaterInCart = (item: CartItem) => {
        if(!customer){
          setLogin(true);
        }
         
      // console.log('added to saveForLater',product?.id)
    };
      const changeLogin = (ch:boolean)=>{
        setLogin(ch);
      }
      useEffect(() => {
        loadCart();
      }, []);
      
      const formatCurrency = (value:number) => {
        const r = new Intl.NumberFormat('en-IN', { 
          style: 'currency', 
          currency: 'INR'
        }).format(value);
       // console.log(value,r)
        return r;
      };

      const addCoupon = (data:any)=>{
        setCoupon({
          coupon_code:data.coupon_code,
          coupon_amount:data.coupon_amount
        });
        setShipping(data.shipping)
        saveCart(cart)
      }
    
    var totalPrice = Object.values(cart).reduce((acc, item:any) => acc + item?.sale_price * item.quantity, 0);
    var totalQuantity = Object.values(cart).reduce((acc, item:any) => acc + item.quantity, 0);
    //console.log(totalPrice,'totalPrice',cart)
    return (
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, handleMinus, handlePlus,addToWishList,totalPrice,saveForLater,login,changeLogin,handleMinusInCart,handlePlusInCart,saveForLaterInCart,formatCurrency,totalQuantity,addCoupon,shipping,coupon,payableAmount}}
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
