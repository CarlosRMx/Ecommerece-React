import React from 'react'
import { Layout } from '../Layout'
import { Card } from '../Card'
import { ProductDetail } from '../ProductDetail'
import { SearchInput } from '../SearchInput'
import { EcommereceContex } from '../../context'

function Home() {
  
  const {products} = React.useContext(EcommereceContex);

  return (
    <Layout>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>Exclusive products</h1>
      </div>

      <SearchInput/>

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