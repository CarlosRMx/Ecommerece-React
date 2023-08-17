import React from "react";
import { useState,useEffect } from "react";
//creando el contexto global 

const EcommereceContex = React.createContext();

function EcommereceProvider({children}){

    //estado para el consume de la APi
    const [products, setProducts] = useState(null);

    //estado que se encarga del contadoe en el carrito de compras 
    const [count, setCount]=useState(0);

    //estado que controla la parte del componente ProductDetail si esta abierto o cerrado 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    //Esta para poder mostar la informacion en la parte del productDetail
    const [productToShow,setProductToShow] = useState({
      title: "",
      price: "",
      description: "",
      images: [],
    });

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

    const openProducDetail = ()=> setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const showProduct = (product) =>{
      openProducDetail()
      setProductToShow(product)
    }

    return(
        <EcommereceContex.Provider value={{
            products,
            setProducts,
            count,
            setCount,
            addCarrito,
            isProductDetailOpen,
            openProducDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            showProduct,
        }}>
            {children}
        </EcommereceContex.Provider>
    )
}

export {EcommereceContex, EcommereceProvider}