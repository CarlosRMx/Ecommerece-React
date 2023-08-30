import React from 'react'

function ItemOrders(props) {

  const {date,totalItems, totalPrice}= props
  
  return (
    <div className='flex justify-between items-center w-80 p-2 mb-3 bg-black/5 border border-black rounded-xl'>
      <p className='flex flex-col w-full'>
        <div>
          <span className='font-ligth text-medium'>{date}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-medium font-extrabold text-green-500'>{totalItems} articles</span>
          <span className='text-xl font-medium'>$ {totalPrice}</span>
        </div>
      </p>
    </div>
  )
}

export {ItemOrders}