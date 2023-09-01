import React from 'react'
import { useContext } from 'react';
import { EcommereceContex } from '../../context';
function SearchInput() {
    const{ 
      productsByTitle, 
      setProductsByTitle
    } = useContext(EcommereceContex)

  return (
    <div className=''>
      <input
          type='text' 
          className='w-80 p-3 mb-6 border border-black rounded-lg focus:outline-none' 
          placeholder='🔍 Search...'
          value={productsByTitle}
          onChange={(event)=>{
            setProductsByTitle(event.target.value);
          }}
        >
      </input>
    </div>
  )
}

export {SearchInput}