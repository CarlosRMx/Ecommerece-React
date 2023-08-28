import React from 'react'

function ItemOrders(props) {

  const {date,totalItems, totalPrice}= props
  
  return (
    <div className='flex justify-between items-center mb-3 border border-black'>
      <p>
        <span>{date}</span>
        <span>{totalItems}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}

export {ItemOrders}