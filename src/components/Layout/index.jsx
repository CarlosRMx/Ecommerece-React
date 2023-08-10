import React from 'react'

function Layout({children}) {
  return (
    <div className='flex flex-col items-center mt-24'>
        {children}
    </div>
  )
}

export {Layout}