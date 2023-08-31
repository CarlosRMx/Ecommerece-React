import React from "react";
import { useState,useEffect } from "react";
//creando el contexto global 

const EcommereceContex = React.createContext();

function EcommereceProvider({children}){

    //estado para el consume de la APi
    const [products, setProducts] = useState(null);
    
    //estado para poder filtar por titulo
    const [filteredItems, setFilteredItems] = useState(null);

    //estado para filtar por categoria
    const [productsByCategory, setProductsByCategory] = useState(null);

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

    const [searchValue, setSearchValue] = useState('');

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
  
    },[]);


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
      return total.toFixed(2);
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

   const filterByTitle= (products, searchValue) =>{
      const inputValue = searchValue.toLowerCase();
      return products?.filter(item => item.title.toLowerCase().includes(inputValue));
   }
   
   const filterByCategory = (products, nameCategory) => {
    const query = products?.filter(product => product.category === nameCategory);
    setProductsByCategory(query);
   }

 
   useEffect(()=>{
      if(searchValue){
        setFilteredItems(filterByTitle(products,searchValue));
      }

  },[products,searchValue]);
   
   console.log('valor en el input', searchValue);
   console.log('Filtro por titulo', filteredItems);
   console.log('Filtro por categoria', productsByCategory);

    return(
        <EcommereceContex.Provider value={{
            products,
            setProducts,
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
            order,
            searchValue,
            setSearchValue,
            filteredItems
        }}>
            {children}
        </EcommereceContex.Provider>
    )
}

export {EcommereceContex, EcommereceProvider}