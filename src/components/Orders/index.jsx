import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../Layout'
import { ItemOrders } from '../ItemOrders'
import { EcommereceContex } from '../../context'

function Orders() {

  const {
    order,
    totalProducts
  } =  useContext(EcommereceContex);

  return (
    <Layout>
      My Orders
      {
        order.map((item,index) => (
          <Link key={index} to={`/my-orders/${item.id}`}>
            <ItemOrders
              date={item.date}
              totalItems={item.products.length}
              totalPrice={totalProducts(item.products)}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export {Orders}