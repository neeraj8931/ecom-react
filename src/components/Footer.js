import { Link } from "react-router-dom";


const Footer  = () =>{

    return (
        <div className="md:flex justify-between font-bold text-2xl bg-black text-white py-4 px-10">
          <p className="text-5xl font-bold w-1/2">SHOPPING APP</p>
          <div className="sm:grid sm:grid-cols-2">
          <div className="menu-items w-1/2">
          <Link to={"/"} className=""> Home</Link>
          <Link to={"/"} className=""> Collections</Link>
          <Link to={"/"} className=""> Offers</Link>
          <Link to={"/"} className=""> About us</Link>
          <Link to={"/"} className=""> Contact us</Link>
          
          </div>
          <div className="menu-items w-1/2">
          <Link to={"/"} className=""> </Link>
          <Link to={"/"} className=""> Account</Link>
          <Link to={"/"} className=""> Orders</Link>
          <Link to={"/"} className=""> Warranty</Link>
          <Link to={"/"} className=""> Returns</Link>

          
          </div>
        
        </div>
        </div>
       )
};

export default Footer;

