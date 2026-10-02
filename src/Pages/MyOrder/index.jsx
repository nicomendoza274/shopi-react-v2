import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout";
import OrderCard from '../../Components/OrderCard';


const MyOrder = () => {
  const context = useContext(ShoppingCartContext)
  const params = useParams();
  const indexOrderPath = Number(params.id)
  const orders = !isNaN(indexOrderPath)  ? 
    context.order?.[indexOrderPath]?.products : 
    context.order?.slice(-1)[0]?.products

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-6'>
        <Link className='absolute left-0 ' to={'/my-orders'}>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>MyOrders</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          orders.map((product, index) =>(
            <OrderCard
              id={!isNaN(indexOrderPath) ? product.id : index}
              key={product.id}
              title={product.title} 
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export default MyOrder;
