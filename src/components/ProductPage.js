import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { CartProducts } from "../app";

const ProductPage = () => {
  const { cart, setCart } = useContext(CartProducts);

  const { id } = useParams();
  console.log(id);
  const [productId,setProductId]=useState(id);

  const [product, setProduct] = useState(null);
  const [productMainImage, setProductMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  async function getProduct(id) {
    const data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const json = await data.json();
    setProduct(json);
    console.log(product);
    setProductMainImage(json.images[0]);
  }
  useEffect(() => {
    getProduct(id);
    console.log("getting products",productId);
  }, [id]);

  console.log(product);
  console.log(cart);

  return !product ? (
    <p>Loading</p>
  ) : (
    <>
      <div className="flex flex-wrap">
        <div className="w-full border-2 p-3 md:w-1/2">
          <div className="image-wrapper ">
            <img className="w-full" src={productMainImage} alt={product.title} />
            <div className="product-images flex flex-wrap justify-center ">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  onClick={() => setProductMainImage(image)}
                  className="w-28 hover:cursor-pointer mx-2 mt-4"
                  src={image}
                  alt={product.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="product-details w-full p-3 md:w-1/2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="text-xl mt-8">
            <p className="my-4"> Rs. {product.price}</p>
            <p>{product.description}</p>
          </div>
          <div className="quantity-box flex my-10 font-bold">
            <div className="buttons flex w-1/2 md:w-1/5 text-center">
              <button
                className="w-1/3 h-[50px] bg-black text-white"
                onClick={() => {
                  setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
                }}
              >
                -
              </button>
              <span className="w-1/3">{quantity}</span>
              <button
                className="w-1/3 h-[50px] bg-black text-white"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="cta-buttons font-bold">
            <button
              className="w-full h-[50px] bg-black text-white mt-3"
              onClick={() => {
                let cartToSet;
                const previousSameProduct = cart.filter(
                  (item) => item.product.id === product.id
                );
                const previousQuantity = previousSameProduct.reduce(
                  (total, currentValue) =>{
                    return total + currentValue.quantity
                  },
                   
                  0
                );
                console.log(previousQuantity,previousSameProduct);
                if (previousQuantity>0) {
                  const itemToAdd = {
                    product: product,
                    quantity: previousQuantity + quantity,
                  };
                  console.log(itemToAdd, previousQuantity);
                  const oldItems = cart.filter(
                    (item) => item.product.id != product.id
                  );
                  console.log(oldItems);
                  cartToSet = [...oldItems, itemToAdd];
                } else {
                  const itemToAdd = {
                    product: product,
                    quantity: quantity,
                  };
                  cartToSet = [...cart, itemToAdd];
                }

                console.log(cart.length);
                setCart(cartToSet);
              }}
            >
              Add to Cart
            </button>
            <button className="w-full h-[50px] bg-black text-white mt-3">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
