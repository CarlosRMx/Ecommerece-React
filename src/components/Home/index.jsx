import React from 'react'
import { useState,useEffect } from 'react'
import { Layout } from '../Layout'
import { Card } from '../Card'

function Home() {
  const URL = 'https://api.escuelajs.co/api/v1';
  const [products, setProducts] = useState(null);

  //consumiendo la API
  useEffect(()=>{

    const fetchData = async () =>{
      try {
        const respuesta= await fetch(`${URL}/products`);
        const data = await respuesta.json();
        setProducts(data)
      } catch (error) {
        console.log("Ocurrio un error con los datos");
      }
    }

    fetchData()

  },[])

  return (
    <Layout>
      Home
      {products?.map(product =>(
        <Card/>
      ))}
    </Layout>
  )
}

export {Home}