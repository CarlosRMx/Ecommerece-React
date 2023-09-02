import React from 'react'
import { Layout } from '../Layout'
import { Card } from '../Card'
import { ProductDetail } from '../ProductDetail'
import { SearchInput } from '../SearchInput'
import { EcommereceContex } from '../../context'

function Home() {
  
  const {
    products,
    productsByTitle,
    filteredItems
  } = React.useContext(EcommereceContex);

  const renderView = () =>{
    if(productsByTitle?.length > 0){
      if(filteredItems?.length > 0){
        return(
          filteredItems?.map((product) =>(
            <Card
              key={product.id}
              {...product}
            />
          ))
        )
      }else{
        return (
          <p className='font-bold text-lg'>Ups, Result not found :(</p>
        )
      }
    }else{
      return(
        products?.map((product) =>(
          <Card
            key={product.id}
            {...product}
          />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>Exclusive products</h1>
      </div>

      <SearchInput/>

      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export {Home}