import React from 'react'
import { NavItem } from '../NavLink'

function Navbar() {
    const activeStyle='underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center 
    fixed  w-full py-5 px-8 text-base font-normal z-10'
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
            <li>
                🛒 0
            </li>

        </ul>
    </nav>
  )
}

export {Navbar}