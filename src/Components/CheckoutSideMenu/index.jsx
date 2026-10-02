import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const isCheckoutSideMenuOpen = context.isCheckoutSideMenuOpen
  const closeCheckoutSideMenu = () => context.closeCheckoutSideMenu()

  const removeProduct = (id) => {
    const filtered = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts(filtered)
    context.setCount(context.count - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString('es-AR'),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
    context.closeCheckoutSideMenu()
    context.setSearchByTitle(null)
  }

  return (
    <aside 
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div className='cursor-pointer' onClick={() => closeCheckoutSideMenu()}>
          <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.cartProducts.map((product) =>(
            <OrderCard
              id={product.id}
              key={product.id}
              title={product.title} 
              imageUrl={product.images}
              price={product.price}
              removeProduct = {removeProduct}
            />
          ))
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button 
            className='w-full bg-black py-3 text-white rounded-lg'
            onClick={()=> handleCheckout()}
          >Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu