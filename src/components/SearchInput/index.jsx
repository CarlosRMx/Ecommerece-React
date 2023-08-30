import React from 'react'
import { useContext } from 'react';
import { EcommereceContex } from '../../context';
function SearchInput() {
    const{ 
        searchValue,
        setSearchValue,
    } = useContext(EcommereceContex)

  return (
    <div className=''>
      <input
          type='text' 
          className='w-80 p-3 mb-6 border border-black rounded-lg focus:outline-none' 
          placeholder='🔍 Search...'
          value={searchValue}
          onChange={(event)=>{
            setSearchValue(event.target.value);
          }}
        >
      </input>
    </div>
  )
}

export {SearchInput}