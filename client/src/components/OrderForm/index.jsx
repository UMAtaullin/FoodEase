import React, { useState } from 'react'
import './OrderForm.css'

const OrderForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    drink: '',
    flavor: '',
    topping: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      name: '',
      drink: '',
      flavor: '',
      topping: '',
    })
  }

  return (
    <form className='order-form' onSubmit={handleSubmit}>
      <h2>Создать новый заказ</h2>

      <div className='form-group'>
        <label>Имя:</label>
        <input
          type='text'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className='form-group'>
        <label>Напиток:</label>
        <input
          type='text'
          value={formData.drink}
          onChange={(e) => setFormData({ ...formData, drink: e.target.value })}
          required
        />
      </div>

      <div className='form-group'>
        <label>Основное блюдо:</label>
        <input
          type='text'
          value={formData.flavor}
          onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
          required
        />
      </div>

      <div className='form-group'>
        <label>Гарнир:</label>
        <input
          type='text'
          value={formData.topping}
          onChange={(e) =>
            setFormData({ ...formData, topping: e.target.value })
          }
          required
        />
      </div>

      <button type='submit' className='submit-btn'>
        Оформить заказ
      </button>
    </form>
  )
}

export default OrderForm
