import React from 'react'
import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import './checkOutOrder.css'
import { EcommereceContex } from '../../context'

function CheckOutOrder() {
  const {
    isCheckOutOpen,
    closeCheckOut,
  } = useContext(EcommereceContex);


  return (
    <aside 
        className={` ${isCheckOutOpen ? 'flex' : 'hidden'}
        check-out-order flex-col fixed right-0 
        border bg-white border-black rounded-lg rounded-b-none
        rounded-r-none border-b-0 border-r-0`}
    >
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My order</h2>
            <XCircleIcon 
              className='w-8 h-8 cursor-pointer'
              onClick={closeCheckOut}
            />
        </div>

    </aside>
  )
}

export {CheckOutOrder}