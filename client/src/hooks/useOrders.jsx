import { useState, useEffect } from 'react'
import { fetchOrders, createOrder } from '../api/orderApi'

const useOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders()
        setOrders(data)
      } catch (err) {
        setError('Ошибка загрузки заказов')
      } finally {
        setLoading(false)
      }
    }
    loadOrders()
  }, [])

  const addOrder = async (newOrder) => {
    try {
      const createdOrder = await createOrder(newOrder)
      setOrders([...orders, createdOrder])
    } catch (err) {
      setError('Ошибка создания заказа')
    }
  }

  return { orders, loading, error, addOrder }
}

export default useOrders
