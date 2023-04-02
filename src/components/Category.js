import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Category = () =>{
    const [products, setProducts] = useState(null);
    const [categoryDetails, setCategoryDetails] = useState(null);
    let { id } = useParams();
 
    async function getCategoryProducts () {
        const data = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
        const json = await data.json();
        setProducts(json);
        
    }
    async function getCategoryDetails () {
        const data = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
        const json = await data.json();
        setCategoryDetails(json);
        
    }
  useEffect(() => {
    getCategoryProducts();
    getCategoryDetails();
  }, [ ])
  console.log(products);
  console.log(categoryDetails);


  
 return  !products?(<p>Loading</p>) : (
    <>
    {categoryDetails && (
    <div className="w-full flex text-center">
       <img className="w-1/2 h-auto" alt={categoryDetails.name} src={categoryDetails.image}/>
       <h1 className="text-4xl w-1/2 font-bold my-14">{categoryDetails.name}</h1>
    </div>
  )}

     <div className="flex flex-wrap">
    { products.map(product =>{
       return (
        <Link to={"/products/"+ product.id} key={product.id} className="product-card w-1/4 border-2 p-3 md:w-1/3">
         <div className="image-wrapper">
         <img src={product.images[0]} alt={product.title} />
         </div>
        <h2 className="text-2xl">{product.title}</h2>
        <p> Rs. {product.price}</p>
        </Link>
       )
    })
    }

 </div>
 </>
 )


}

export default Category;