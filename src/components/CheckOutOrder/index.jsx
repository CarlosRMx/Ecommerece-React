import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { CardOrder } from '../CardOrder'
import './checkOutOrder.css'
import { EcommereceContex } from '../../context'

function CheckOutOrder() {
  const {
    isCheckOutOpen,
    closeCheckOut,
    shoppingCart,
    deleteProductTocart,
    totalProducts,
    saveOrder
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

    <div className='flex-1 px-6 overflow-y-scroll'>    
      {
        shoppingCart.map(product => (
          <CardOrder
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            deleteProductTocart={deleteProductTocart}
          />
        ))
      }
    </div>

    <div className='flex flex-col justify-center items-center gap-4 mt-4 mb-6'>
      <div className='w-11/12 rounded-lg bg-black'>
        <p className='flex justify-between items-center p-4 text-white'>
          <span className='text-medium'>Total:</span>
          <span className='font-extrabold text-xl'>$ {totalProducts(shoppingCart)}</span>
        </p>
      </div>
      <Link to='/my-orders/last' className='flex justify-center w-full'>
        <button 
          className='w-11/12 rounded-lg p-4 font-extrabold border border-black'
          onClick={saveOrder}
        >
          CheckOut
        </button>
      </Link>
    </div>

    </aside>

  )
}

export {CheckOutOrder}