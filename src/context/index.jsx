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
    const [productsByCategory, setProductsByCategory] = useState('');
    //by Title
    const [productsByTitle, setProductsByTitle] = useState('');

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

   const filterByTitle= (products, productsByTitle) =>{
      const inputValue = productsByTitle.toLowerCase();
      return products?.filter(item => item.title.toLowerCase().includes(inputValue));
   }
   
   const filterByCategory = (products, productsByCategory ) => {
    const value = productsByCategory.toLowerCase();
    return products?.filter(item => item.category.toLowerCase().includes(value));
   }

   const filterBy = (searchType, products, productsByTitle, productsByCategory) => {
      if(searchType === 'BY_TITLE'){
        return filterByTitle(products,productsByTitle)
      }

      if(searchType === 'BY_CATEGORY'){
        return filterByCategory(products,productsByCategory)
      }

      if(searchType === 'BY_TITLE_AND_BY_CATEGORY'){
        const inputValue = productsByTitle.toLowerCase();
        return filterByCategory(products,productsByCategory).filter(item => item.title.toLowerCase().includes(inputValue));
      }

      if(!searchType){
        return products
      }
   }

   useEffect(()=>{
      if(productsByTitle && productsByCategory) setFilteredItems(filterBy('BY_TITLE_AND_BY_CATEGORY',products,productsByTitle,productsByCategory));
      if(productsByTitle && !productsByCategory) setFilteredItems(filterBy('BY_TITLE',products,productsByTitle,productsByCategory));
      if(!productsByTitle && productsByCategory) setFilteredItems(filterBy('BY_CATEGORY',products,productsByTitle,productsByCategory));
      if(!productsByTitle && !productsByCategory) setFilteredItems(filterBy(null, products,productsByTitle,productsByCategory));
  },[products,productsByTitle,productsByCategory]);

  console.log('SearchCategory', productsByCategory);
  console.log('FilteredObjects', filteredItems);
  console.log('inputValue', productsByTitle);
   
 

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
            productsByTitle,
            setProductsByTitle,
            filteredItems,
            setProductsByCategory,
            productsByCategory,
        }}>
            {children}
        </EcommereceContex.Provider>
    )
}

export {EcommereceContex, EcommereceProvider}