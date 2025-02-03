import React from 'react'
import './OrderItem.css'

const OrderItem = ({ order }) => {
  return (
    <div className='order-item'>
      <h3>Заказ от: {order.name}</h3>
      <p>
        <strong>Напиток:</strong> {order.drink}
      </p>
      <p>
        <strong>Основное блюдо:</strong> {order.flavor}
      </p>
      <p>
        <strong>Гарнир:</strong> {order.topping}
      </p>
      <p>
        <strong>Дата создания:</strong>{' '}
        {new Date(order.created_at).toLocaleString()}
      </p>
    </div>
  )
}

export default OrderItem
