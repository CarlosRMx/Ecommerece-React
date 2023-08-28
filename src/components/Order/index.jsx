import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Layout } from '../Layout'
import {CardOrder} from '../CardOrder'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { EcommereceContex } from '../../context'

function Order() {

  const {
    lastOrder,
    order
  } = useContext(EcommereceContex);

  return (
    <Layout>
    
      <div className='flex justify-center items-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='w-6 h-6 cursor-pointer text-black'/>
        </Link>
        <h1 className='font-bold'>My Order</h1>
      </div>

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