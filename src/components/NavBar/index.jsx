import React from 'react'
import { NavItem } from '../NavLink'
import { ShoppingBagIcon} from '@heroicons/react/24/solid'
import { EcommereceContex } from '../../context';

function Navbar() {

    const {shoppingCart}= React.useContext(EcommereceContex);
    const activeStyle='underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center 
    fixed  w-full py-5 px-8 top-0 text-base font-normal bg-white z-10'
    >
        {/*ul left side */}
        <ul className='flex items-center gap-3'>
            <li className='text-2xl font-bold'>
                Shopi
            </li>
            <li>
                <NavItem 
                    to='/'
                    activeStyle={activeStyle}
                >
                All
                </NavItem>
            </li>
            <li>
                <NavItem 
                    to='/clothes'
                    activeStyle={activeStyle}
                >
                Clothes
                </NavItem>
            </li>
            <li>
                <NavItem 
                    to='/electronics'
                    activeStyle={activeStyle}
                >
                Electronics
                </NavItem>
            </li>
            <li>
                <NavItem 
                    to='/furniture'
                    activeStyle={activeStyle}
                >
                Furniture
                </NavItem>
            </li>
            <li>
                <NavItem 
                    to='/toys'
                    activeStyle={activeStyle}
                >
                Toys
                </NavItem>
            </li> 
            <li>
                <NavItem 
                    to='/others'
                    activeStyle={activeStyle}
                >
                Others
                </NavItem>
            </li>
        </ul>
        {/*ul rigth side  */}
        <ul className='flex items-center gap-3'>
            <li className='text-black/60'>
                carm@shopi.com
            </li>
            <li>
                 <NavItem 
                    to='/my-orders'
                    activeStyle={activeStyle}
                >
                My orders
                </NavItem>
            </li>
            <li>
                 <NavItem 
                    to='/my-account'
                    activeStyle={activeStyle}
                >
                My Account
                </NavItem>
            </li>
            <li>
                 <NavItem 
                    to='/sing-in'
                    activeStyle={activeStyle}
                >
                Sign in
                </NavItem>
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