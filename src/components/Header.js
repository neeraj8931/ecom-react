import { useContext } from "react";
import { CartDrawer, CartProducts } from "../app";
import { Link } from "react-router-dom";


const Header = ( ) => {
  const {toggleCart, showCart} = useContext(CartDrawer);
  const {cart,setCart} = useContext(CartProducts);
  const cartTotalQuantity = cart.reduce((total, currentValue) =>{
      return total + currentValue.quantity
    },
    0
  );

    return (
     <div className="flex justify-between font-bold text-2xl bg-black text-white py-4 px-10">
       <Link to={"/"} className="md:text-5xl font-bold">SHOPPING APP</Link>
       <div className="menu-items w-3/5">
       {/* <Link to={"/"} className=""> Home</Link> */}
       
       </div>
       <button onClick={()=>toggleCart(showCart)}>Cart ({cartTotalQuantity})</button>
     </div>
    )
}

export default Header;