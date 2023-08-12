import React from "react";
import { useState,useEffect } from "react";
//creando el contexto global 

const EcommereceContex = React.createContext();

function EcommereceProvider({children}){
    //estado para el consume de la APi
    const [products, setProducts] = useState(null);
    //estado que se encarga del contadoe en el carrito de compras 
    const [count, setCount]=useState(0);

    const URL = 'https://api.escuelajs.co/api/v1/products';
    //consumiendo la API
    useEffect(()=>{
  
      const fetchData = async () =>{
        try {
          const respuesta= await fetch(URL);
          const data = await respuesta.json();
          setProducts(data)
        } catch (error) {
          console.log("Ocurrio un error con los datos");
        }
      }
      // `${URL}/products`
  
      fetchData()
  
    },[])

    const addCarrito = ()=>{
        setCount(count + 1)
    }
    console.log(count);

    return(
        <EcommereceContex.Provider value={{
            products,
            setProducts,
            count,
            setCount,
            addCarrito
        }}>
            {children}
        </EcommereceContex.Provider>
    )
}

export {EcommereceContex, EcommereceProvider}