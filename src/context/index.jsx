import React from "react";
import { useState,useEffect } from "react";
//creando el contexto global 

const EcommereceContex = React.createContext();

function EcommereceProvider({children}){

    //estado para el consume de la APi
    const [products, setProducts] = useState(null);

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

    //Estado para poder almacener las order que el usuario realiza 
    const [order, setOrder] = useState([]);

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

   const saveOrder = () =>{
    const orderToSave = {
      date:new Date().toDateString(),
      products:shoppingCart,
      totalProduct: shoppingCart.length,
      totalOrder: totalProducts(shoppingCart),      
    }
    
    setOrder([...order,orderToSave]);
    //limpiando el carrito de compras
    setShoppingCart([]);
    closeCheckOut();
   }

   const lastOrder = (listData) =>{
    let lastItem
    if(listData.length > 0){
      lastItem = listData.length - 1;
    }
    return listData[lastItem].products;
   }
   console.log('Este es el listado de las ordenes',  order)

    return(
        <EcommereceContex.Provider value={{
            products,
            setProducts,
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
            totalProducts,
            isCheckOutOpen,
            openCheckOut,
            closeCheckOut,
            saveOrder,
            lastOrder,
            order,
        }}>
            {children}
        </EcommereceContex.Provider>
    )
}

export {EcommereceContex, EcommereceProvider}