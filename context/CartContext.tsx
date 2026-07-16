"use client";

import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext<any>(null);



export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [cart, setCart] = useState<any[]>([]);



  // تحميل السلة من المتصفح
  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if(savedCart){

      setCart(JSON.parse(savedCart));

    }

  }, []);




  // حفظ السلة
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);





  function addToCart(product:any){


    const exist = cart.find(
      item => item.id === product.id
    );



    if(exist){


      setCart(
        cart.map(item =>
          item.id === product.id
          ?
          {
            ...item,
            quantity:item.quantity + 1
          }
          :
          item
        )
      );


    } else {


      setCart([
        ...cart,
        {
          ...product,
          quantity:1
        }
      ]);


    }


  }





  function removeFromCart(id:number){


    setCart(
      cart.filter(
        item => item.id !== id
      )
    );


  }





  function increaseQuantity(id:number){


    setCart(
      cart.map(item =>
        item.id === id
        ?
        {
          ...item,
          quantity:item.quantity + 1
        }
        :
        item
      )
    );


  }





  function decreaseQuantity(id:number){


    setCart(
      cart.map(item =>
        item.id === id && item.quantity > 1
        ?
        {
          ...item,
          quantity:item.quantity - 1
        }
        :
        item
      )
    );


  }





  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}





export function useCart(){

  return useContext(CartContext);

}