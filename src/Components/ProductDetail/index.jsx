import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const isProductDetailOpen = context.isProductDetailOpen
  const closeProductDetail = () => context.closeProductDetail()
  const productToShow = context.productToShow

  return (
    <aside 
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div className='cursor-pointer' onClick={closeProductDetail}>
          <XMarkIcon className='h-6 w-6 text-black'/>
        </div>
      </div>
      <figure className='px-6'>
        <img 
          className='w-full h-full rounded-lg' 
          src={productToShow?.images ? productToShow?.images[0] : ''} 
          alt={productToShow.title} 
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-light text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail