import React from 'react'
import { Layout } from '../Layout'
import { Card } from '../Card'
import { ProductDetail } from '../ProductDetail'
import { EcommereceContex } from '../../context'

function Home() {
  
  const {products} = React.useContext(EcommereceContex);

  // const URL = 'https://api.escuelajs.co/api/v1/products';
  // const [products, setProducts] = useState(null);

  // //consumiendo la API
  // useEffect(()=>{

  //   const fetchData = async () =>{
  //     try {
  //       const respuesta= await fetch(URL);
  //       const data = await respuesta.json();
  //       setProducts(data)
  //     } catch (error) {
  //       console.log("Ocurrio un error con los datos");
  //     }
  //   }
  //   // `${URL}/products`

  //   fetchData()

  // },[])

  return (
    <Layout>
      Home
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {products?.map((product) =>(
          <Card
            key={product.id}
            {...product}
          />
        ))}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export {Home}