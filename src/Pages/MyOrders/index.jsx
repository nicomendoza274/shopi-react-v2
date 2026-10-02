import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import Layout from '../../Components/Layout'

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (
      <Layout>
        <div className='flex items-center justify-center w-80 relative mb-4'>
          <h1 className='font-medium text-xl'>MyOrders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalPrice } 
                totalProducts={order.totalProducts}
                date={order.date}/>
            </Link>
            ))
        }
      </Layout>
    )
  }
  
export default MyOrders
  