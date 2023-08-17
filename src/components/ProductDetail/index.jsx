import React from 'react'
import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import './productDetail.css'
import { EcommereceContex } from '../../context'

function ProductDetail() {
  const {
    isProductDetailOpen,
    closeProductDetail,
  } = useContext(EcommereceContex);
  return (
    <aside 
        className={` ${isProductDetailOpen ? 'flex' : 'hidden'}
        product-detail flex-col fixed right-0 
        border bg-white border-black rounded-lg rounded-b-none
        rounded-r-none border-b-0 border-r-0`}
    >
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <XCircleIcon 
              className='w-8 h-8 cursor-pointer'
              onClick={closeProductDetail}
            />
        </div>

    </aside>
  )
}

export {ProductDetail}