Отлично! Создадим фронтенд для вашего сервиса доставки еды на React. Используем ту же структуру проекта, что и раньше, с улучшенной организацией кода.

### 1. Обновленная структура проекта
```
src/
├── api/
│   └── orderApi.js
├── components/
│   ├── OrderForm/
│   │   ├── index.jsx
│   │   └── OrderForm.css
│   ├── OrderList/
│   │   ├── index.jsx
│   │   └── OrderList.css
│   └── OrderItem/
│       ├── index.jsx
│       └── OrderItem.css
├── hooks/
│   └── useOrders.js
├── App.jsx
└── main.jsx
```

### 2. API слой (src/api/orderApi.js)
```javascript
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/orders/';

export const fetchOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await axios.post(API_URL, orderData);
  return response.data;
};
```

### 3. Пользовательский хук (src/hooks/useOrders.js)
```javascript
import { useState, useEffect } from 'react';
import { fetchOrders, createOrder } from '../api/orderApi';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (err) {
        setError('Ошибка загрузки заказов');
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
  }, []);

  const addOrder = async (newOrder) => {
    try {
      const createdOrder = await createOrder(newOrder);
      setOrders([...orders, createdOrder]);
    } catch (err) {
      setError('Ошибка создания заказа');
    }
  };

  return { orders, loading, error, addOrder };
};

export default useOrders;
```

### 4. Компонент формы заказа (src/components/OrderForm/index.jsx)
```javascript
import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    drink: '',
    flavor: '',
    topping: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      drink: '',
      flavor: '',
      topping: ''
    });
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Создать новый заказ</h2>
      
      <div className="form-group">
        <label>Имя:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label>Напиток:</label>
        <input
          type="text"
          value={formData.drink}
          onChange={(e) => setFormData({...formData, drink: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label>Основное блюдо:</label>
        <input
          type="text"
          value={formData.flavor}
          onChange={(e) => setFormData({...formData, flavor: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label>Гарнир:</label>
        <input
          type="text"
          value={formData.topping}
          onChange={(e) => setFormData({...formData, topping: e.target.value})}
          required
        />
      </div>

      <button type="submit" className="submit-btn">Оформить заказ</button>
    </form>
  );
};

export default OrderForm;
```

### 5. Компонент списка заказов (src/components/OrderList/index.jsx)
```javascript
import React from 'react';
import OrderItem from '../OrderItem';
import './OrderList.css';

const OrderList = ({ orders, loading, error }) => {
  if (loading) return <div className="loading">Загрузка заказов...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="order-list">
      <h2>Последние заказы</h2>
      {orders.length === 0 ? (
        <p>Нет доступных заказов</p>
      ) : (
        orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))
      )}
    </div>
  );
};

export default OrderList;
```

### 6. Главный компонент приложения (src/App.jsx)
```javascript
import React from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import useOrders from './hooks/useOrders';
import './App.css';

function App() {
  const { orders, loading, error, addOrder } = useOrders();

  return (
    <div className="app-container">
      <h1>Служба доставки еды</h1>
      <div className="content-wrapper">
        <OrderForm onSubmit={addOrder} />
        <OrderList orders={orders} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;
```

### 7. Базовая стилизация (src/App.css)
```css
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 30px;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
}

.loading, .error {
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
}

.error {
  color: #e74c3c;
}
```

### Для запуска:
1. Убедитесь, что бэкенд работает на `http://localhost:8000`
2. Запустите React-приложение:
```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173` с:
- Формой для создания новых заказов
- Списком существующих заказов
- Автоматическим обновлением списка после создания заказа
- Адаптивным дизайном

Можете дополнительно:
1. Добавить валидацию полей формы
2. Реализовать фильтрацию заказов
3. Добавить анимации
4. Реализовать удаление/редактирование заказов