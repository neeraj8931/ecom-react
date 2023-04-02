import { useState,useEffect } from "react";
import { Link } from "react-router-dom";



const Homepage = ()=>{
    const [allCategories, setAllCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    async function getCategories() {
        const data = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const json = await data.json();
        setAllCategories(json);
        console.log(json)

      }
      useEffect(() => {
        getCategories();
      }, []);


    

      console.log(allCategories);

      return allCategories?.length === 0 ? (
        <p>loading</p>
      ) : ( 
         
           <div className="flex flex-wrap justify-center min-h-max">
            {
                allCategories.map((category)=>{
               
                return (
                    <Link key={category.id} className="border-2 p-3 md:w-1/3" to={"collections/" + category.id}>
                     <img className="" alt={category.name}  src={category.image} />
                    <h2 className="text-3xl">{category.name}</h2>
                  </Link>
                )
            })
            }

           </div>
        
      
      );



}

export  default Homepage;