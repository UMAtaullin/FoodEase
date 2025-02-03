import React from 'react'
import OrderItem from '../OrderItem'
import './OrderList.css'

const OrderList = ({ orders, loading, error }) => {
  if (loading) return <div className='loading'>Загрузка заказов...</div>
  if (error) return <div className='error'>{error}</div>

  return (
    <div className='order-list'>
      <h2>Последние заказы</h2>
      {orders.length === 0 ? (
        <p>Нет доступных заказов</p>
      ) : (
        orders.map((order) => <OrderItem key={order.id} order={order} />)
      )}
    </div>
  )
}

export default OrderList
