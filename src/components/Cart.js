import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartDrawer, CartProducts } from "../app";

const Cart = () => {
  const { toggleCart, showCart } = useContext(CartDrawer);
  const { cart, setCart } = useContext(CartProducts);
  let updatedCart=[];

  console.log(cart.length);
  console.log(cart);
  const cartTotal = cart.reduce(
    (total, currentValue) =>
      total + currentValue.product.price * currentValue.quantity,
    0
  );

  const updateCartItem=(index)=>{
    updatedCart.splice(index, 1);
    console.log(updatedCart);
    setCart(updatedCart);
  }
  console.log(cartTotal);
  console.log(updatedCart);
  return (
    <div
      className="h-screen fixed right-0 top-0 bg-black w-full md:w-[500px] text-white border-y-2"
      style={showCart ? { position: "fixed" } : { display: "none" }}
    >
      <div className="cart-header flex justify-between w-4/5 mx-auto text-3xl my-10">
        <p className="">Cart</p>
        <button onClick={() => toggleCart(showCart)}>x</button>
      </div>
      <div className="cart-items mt-2 w-9/10">
        {cart.map((cartItem,index) => {
          updatedCart.push(cartItem);
          console.log(updatedCart);
          return (
            
            <div className="cart-item mt-[30px] w-full flex justify-items-center text-white">
              <Link to={"/products/"+ cartItem.product.id} target="_blank">
              <img
                className="w-[100px]"
                src={cartItem.product.images[0]}
                alt={cartItem.title}
              />

              </Link>
              <div className="cart-item-details mx-3 w-3/5">
              <Link to={"/products/"+ cartItem.product.id}>
              <p className="text-3xl">{cartItem.product.title}</p>
              </Link>
               <div className="flex justify-between">
               <p className="text-2xl">Rs .{cartItem.product.price}</p>
                <p className="quantity text-2xl">Qty. {cartItem.quantity}</p>
               </div>
              </div>
                
             
              <div className="remove-item absolute right-4 text-xl underline hover:cursor-pointer" onClick={()=>{
                updateCartItem(index);
              }}>remove</div>
            </div>
          
           
          );
         
        })}
      </div>
      <div className="cart-footer flex absolute bottom-0 w-full border-y-2">
        <div className="cart-total  w-4/5 mx-auto my-10">
          <p className="text-3xl">Total : Rs. {cartTotal}</p>
        </div>
      </div>
    </div>
  );
};
export default Cart;
