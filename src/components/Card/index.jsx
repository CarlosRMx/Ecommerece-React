import React from 'react'

function Card({data}) {
  return (
    <div className='w-56 h-60 bg-white rounded-lg cursor-pointer'>
        <figure className='relative w-full h-4/5 mb-2'>
            <div 
                className='absolute top-0 right-0 m-2 flex justify-center
                 items-center w-8 h-8 p-1 bg-white rounded-full'
            >+
            </div>
            <img 
                className='w-full h-full rounded-lg object-cover' 
                src='https://images.pexels.com/photos/3394654/pexels-photo-3394654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            >
            </img>
            <span 
                className='absolute bottom-0 left-0 m-2 px-2 
                py-0.5 text-xs rounded-lg bg-white/60'
            >Electronics
            </span>

        </figure>
        <div className='flex justify-between items-center w-full'>
            <p className='text-base font-light'>Headphones</p>
            <span className='text-lg font-bold'>$350</span>
        </div>
    </div>
  )
}

export {Card}