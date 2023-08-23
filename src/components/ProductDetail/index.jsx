import React from 'react'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './productDetail.css'
import { EcommereceContex } from '../../context'

function ProductDetail() {
  const {
    isProductDetailOpen,
    closeProductDetail,
    productToShow,
  } = useContext(EcommereceContex);

 const {title,price,images,description} = productToShow;

  return (
    <aside 
        className={` ${isProductDetailOpen ? 'flex' : 'hidden'}
        product-detail flex-col fixed right-0 
        border bg-white border-black rounded-lg rounded-b-none
        rounded-r-none border-b-0 border-r-0`}
    >
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <XMarkIcon 
              className='w-6 h-6 cursor-pointer'
              onClick={closeProductDetail}
            />
        </div>

        <figure className='flex justify-center px-6 mb-4'>
          <img
            className='w-4/6 h-full rounded-lg object-cover'
            src={images[0]}
            alt={title}
          /> 
        </figure>
        <div className='p-6'>
          <span className='font-bold text-2xl'>$ {price}</span>
          <h2 className='mt-2 mb-1 font-medium text-xl'>{title}</h2>
          <p className='font-light text-md'>{description}</p>
        </div>

    </aside>
  )
}

export {ProductDetail}