import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon} from '@heroicons/react/24/solid'
import { EcommereceContex } from '../../context';

function Navbar() {

    const {
        shoppingCart,
        setProductsByCategory,
    }= React.useContext(EcommereceContex);

    const activeStyle='underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center 
    fixed  w-full py-5 px-8 top-0 text-base font-normal bg-white z-10'
    >
        {/*ul left side */}
        <ul className='flex items-center gap-3'>
            <li className='text-2xl font-bold'>
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/'
                    onClick={() => setSearchByCategory()}
                    activeStyle={activeStyle}
                >
                All
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/menClothes'
                    onClick={()=> setProductsByCategory("men's clothing")}
                    activeStyle={activeStyle}
                >
                Men's clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/womenClothes'
                    onClick={()=> setProductsByCategory("women's clothing")}
                    activeStyle={activeStyle}
                >
                Women's clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/jewellery'
                    onClick={()=> setProductsByCategory('jewelery')}
                    activeStyle={activeStyle}
                >
                Jewellery 
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/electronics'
                    onClick={()=> setProductsByCategory('electronics')}
                    activeStyle={activeStyle}
                >
                Electronics
                </NavLink>
            </li> 

        </ul>
        {/*ul rigth side  */}
        <ul className='flex items-center gap-3'>
            <li className='text-black/60'>
                carm@shopi.com
            </li>
            <li>
                 <NavLink 
                    to='/my-orders'
                    activeStyle={activeStyle}
                >
                My orders
                </NavLink>
            </li>
            <li>
                 <NavLink 
                    to='/my-account'
                    activeStyle={activeStyle}
                >
                My Account
                </NavLink>
            </li>
            <li>
                 <NavLink 
                    to='/sing-in'
                    activeStyle={activeStyle}
                >
                Sign in
                </NavLink>
            </li>
            <li className='flex items-center'>
                <ShoppingBagIcon className='w-6 h-6 text-black'/>
                <div className='mx-1'>{shoppingCart.length}</div> 
            </li>

        </ul>
    </nav>
  )
}

export {Navbar}