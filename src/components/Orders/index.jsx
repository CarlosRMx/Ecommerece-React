import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../Layout'
import { ItemOrders } from '../ItemOrders'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { EcommereceContex } from '../../context'

function Orders() {

  const {
    order,
    totalProducts
  } =  useContext(EcommereceContex);

  return (
    <Layout>
      <div className='flex justify-center items-center relative w-80 mb-6'>
        <Link to='/' className='absolute left-0'>
          <ChevronLeftIcon className='w-6 h-6 cursor-pointer text-black'/>
        </Link>
        <h1 className='font-bold'>My Orders</h1>
      </div>
      {
        order.map((item,index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <ItemOrders
              date={item.date}
              totalItems={item.products.length}
              totalPrice={totalProducts(item.products)}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export {Orders}