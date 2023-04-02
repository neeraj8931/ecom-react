import { useContext } from "react";
import { CartDrawer, CartProducts } from "../app";


const Header = (props) => {
  const {toggleCart, showCart} = useContext(CartDrawer);
  const {cart,setCart} = useContext(CartProducts);
  const cartTotalQuantity = cart.reduce((total, currentValue) =>{
      return total + currentValue.quantity
    },
    0
  );

    return (
     <div className="flex justify-between">
       <p>Header</p>
       <button onClick={()=>toggleCart(showCart)}>openCart ({cartTotalQuantity})</button>
     </div>
    )
}

export default Header;