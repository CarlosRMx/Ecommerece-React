import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'


function CardOrder(props) {

  const {id,title,imageUrl,price,deleteProductTocart} = props;

  return (
    <div className='flex justify-between items-center mb-3'>

        <div className='flex justify-center items-center gap-2'>
            <figure className='w-20 h-20'>
                <img 
                    className='w-full h-full object-cover rounded-lg' 
                    src={imageUrl} 
                    alt={title}
                />
            </figure>
            <h3 className='text-sm font-light'>{title}</h3>
        </div>

        <div className='flex justify-center items-center gap-2'>
            <p className='text-lg font-bold'>${price}</p>
            {
              deleteProductTocart && <XMarkIcon className='w-6 h-6 cursor-pointer text-red-400' onClick={()=>deleteProductTocart(id)}/>
            }
        </div>

    </div>
  )
}

export {CardOrder}