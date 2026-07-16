"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const CartContext = createContext<any>(null);



export function CartProvider({
  children,
}:{
  children: React.ReactNode;
}) {


  const [cart,setCart] = useState<any[]>([]);




  useEffect(()=>{

    const savedCart = localStorage.getItem("cart");

    if(savedCart){

      setCart(JSON.parse(savedCart));

    }

  },[]);





  useEffect(()=>{

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  },[cart]);







  function addToCart(product:any){


    const exist = cart.find(item =>

      item.id === product.id &&

      item.selectedColor === product.selectedColor &&

      item.selectedSize === product.selectedSize

    );




    if(exist){


      setCart(

        cart.map(item =>

          item.id === product.id &&

          item.selectedColor === product.selectedColor &&

          item.selectedSize === product.selectedSize

          ?

          {
            ...item,
            quantity:item.quantity + 1
          }

          :

          item

        )

      );


    }else{


      setCart([

        ...cart,

        {
          ...product,
          quantity:1
        }

      ]);


    }


  }








  function removeFromCart(
    id:number,
    color:string,
    size:string
  ){


    setCart(

      cart.filter(item =>

        !(

          item.id === id &&

          item.selectedColor === color &&

          item.selectedSize === size

        )

      )

    );


  }









  function increaseQuantity(
    id:number,
    color:string,
    size:string
  ){


    setCart(

      cart.map(item =>


        item.id === id &&

        item.selectedColor === color &&

        item.selectedSize === size


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









  function decreaseQuantity(
    id:number,
    color:string,
    size:string
  ){


    setCart(

      cart.map(item =>


        item.id === id &&

        item.selectedColor === color &&

        item.selectedSize === size &&

        item.quantity > 1


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

        decreaseQuantity

      }}

    >

      {children}

    </CartContext.Provider>

  );


}






export function useCart(){

  return useContext(CartContext);

}