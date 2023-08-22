import React from 'react'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { CardOrder } from '../CardOrder'
import './checkOutOrder.css'
import { EcommereceContex } from '../../context'

function CheckOutOrder() {
  const {
    isCheckOutOpen,
    closeCheckOut,
    shoppingCart,
  } = useContext(EcommereceContex);


  return (
    <aside 
        className = {` ${isCheckOutOpen ? 'flex' : 'hidden'}
        check-out-order flex-col fixed right-0 
        border bg-white border-black rounded-lg rounded-b-none
        rounded-r-none border-b-0 border-r-0`}
    >
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My order</h2>
            <XMarkIcon 
              className='w-6 h-6 cursor-pointer'
              onClick={closeCheckOut}
            />
        </div>

    <div className='px-6 overflow-y-scroll'>    
      {
        shoppingCart.map(product => (
          <CardOrder
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))
      }
    </div>

    </aside>

  )
}

export {CheckOutOrder}