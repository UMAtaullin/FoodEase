import React from 'react'
import OrderForm from './components/OrderForm'
import OrderList from './components/OrderList'
import useOrders from './hooks/useOrders'
import './App.css'
import { Header } from './components/Header/Header'

function App() {
  const { orders, loading, error, addOrder } = useOrders()

  return (
    <div className='app-container'>
      <Header/>
      <h1>Служба доставки еды</h1>
      <div className='content-wrapper'>
        <OrderForm onSubmit={addOrder} />
        <OrderList orders={orders} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default App
