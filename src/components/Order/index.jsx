import React from 'react'
import { useContext } from 'react'
import { Layout } from '../Layout'
import {CardOrder} from '../CardOrder'
import { EcommereceContex } from '../../context'

function Order() {
  const {
    lastOrder,
    order
  } = useContext(EcommereceContex);

  return (
    <Layout>
       <div className='flex flex-col w-80'>    
        {
          lastOrder(order).map(product => (
            <CardOrder
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
    </div>
    </Layout>
  )
}

export {Order}