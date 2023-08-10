import { NavLink } from 'react-router-dom'

function NavItem({to,activeStyle,children}) {
  return (
    <NavLink
        to={to}
        className={({isActive})=>
        isActive ? activeStyle: undefined
        }
    >
        {children}
    </NavLink>
  )
}

export {NavItem}