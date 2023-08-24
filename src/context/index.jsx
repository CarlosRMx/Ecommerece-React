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

    //estado para controlar el componente CheckOut si esta abierto o cerrdado
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

    //Estado para poder mostar la informacion en la parte del productDetail
    const [productToShow,setProductToShow] = useState({
      title: "",
      price: "",
      description: "",
      images: "",
    });

    //Estado para poder almacenar los productos al momento de presionar el boton agregar
    const [shoppingCart, setShoppingCart] = useState([]);

    const URL = 'https://fakestoreapi.com/products';
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
  
      fetchData();
  
    },[])

    const addCarrito = ()=>{
        setCount(count + 1)
    }

    const openProducDetail = ()=> setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const openCheckOut = () => setIsCheckOutOpen(true);
    const closeCheckOut = () => setIsCheckOutOpen(false);

    const showProduct = (productDetail) =>{
      openProducDetail();
      closeCheckOut();
      setProductToShow(productDetail);
    }

    const addProductToCart = (event,product) => {
      event.stopPropagation();
      openCheckOut();
      closeProductDetail();
      setCount(count + 1);
      setShoppingCart([...shoppingCart, product]);
    }

    const deleteProductTocart = (idProductToDelete) =>{
      const arrayCopy = [...shoppingCart];
      const indexProduct = arrayCopy.findIndex(product => {
        return product.id === idProductToDelete;
      });
      arrayCopy.splice(indexProduct,1);
      setShoppingCart(arrayCopy);
    }

    const totalProducts = (products) => {
      const total = products.reduce((acc,product) => acc + product.price,0);
      return total;
    }

    console.log('Este es el total ', totalProducts(shoppingCart));


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
            shoppingCart,
            setShoppingCart,
            addProductToCart,
            deleteProductTocart,
            isCheckOutOpen,
            openCheckOut,
            closeCheckOut,
        }}>
            {children}
        </EcommereceContex.Provider>
    )
}

export {EcommereceContex, EcommereceProvider}