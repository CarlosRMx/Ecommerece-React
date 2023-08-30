import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function ItemOrders(props) {

  const {date,totalItems, totalPrice}= props
  
  return (
    <div className='flex justify-between items-center gap-4 w-80 p-3 mb-3 border-current shadow-md rounded-lg'>
      <div className='flex flex-col w-full'>
        <p>
          <span className='font-ligth text-medium'>{date}</span>
        </p>
        <p className='flex justify-between items-center'>
          <span className='text-medium font-extrabold text-green-500'>{totalItems} articles</span>
          <span className='text-xl font-medium'>$ {totalPrice}</span>
        </p>
      </div>
      <ChevronRightIcon className='w-6 h-6 text-black'/>
    </div>
  )
}

export {ItemOrders}