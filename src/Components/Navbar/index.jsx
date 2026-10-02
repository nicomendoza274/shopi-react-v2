import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  const context = useContext(ShoppingCartContext)

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory(null)}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory(1)}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory(2)}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory(3)}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory(4)}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory(5)}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          nicomendoza274@gmail.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            My Accounts
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sing-in'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingCartIcon className='h-6 w-6 text-black' onClick={() => context.openCheckoutSideMenu()} />
          <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar