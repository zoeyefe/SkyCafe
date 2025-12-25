import React, { useState } from 'react';
import '../styles/orders.css';

function OrdersPage() {
  const [orders] = useState([
    {
      id: 1,
      user_id: 1,
      cafe_id: 1,
      cafe_name: 'Sky Café',
      total_price: 98.00,
      status: 'completed',
      order_date: '2025-12-25T10:30:00',
      items: ['Cappuccino', 'Croissant']
    },
    {
      id: 2,
      user_id: 1,
      cafe_id: 1,
      cafe_name: 'Sky Café',
      total_price: 63.00,
      status: 'pending',
      order_date: '2025-12-25T14:15:00',
      items: ['Latte', 'Cheesecake']
    },
    {
      id: 3,
      user_id: 1,
      cafe_id: 2,
      cafe_name: 'Cloud Coffee House',
      total_price: 82.00,
      status: 'pending',
      order_date: '2025-12-25T16:45:00',
      items: ['Flat White', 'Mocha']
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('Tümü');

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#27AE60';
      case 'pending':
        return '#FF8C00';
      case 'cancelled':
        return '#E74C3C';
      default:
        return '#999';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Tamamlandı ✓';
      case 'pending':
        return 'Hazırlanıyor';
      case 'cancelled':
        return 'İptal Edildi';
      default:
        return status;
    }
  };

  const filteredOrders = filterStatus === 'Tümü'
    ? orders
    : orders.filter(order => order.status === filterStatus.toLowerCase());

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR') + ' ' + date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="orders-page">
      <div className="container">
        <h1>Siparişlerim</h1>
        <p className="subtitle">Tüm siparişlerinizin durumunu takip edin</p>

        {/* Status Filter */}
        <div className="status-filter">
          {['Tümü', 'Pending', 'Completed', 'Cancelled'].map(status => (
            <button
              key={status}
              className={`filter-btn ${filterStatus === status ? 'active' : ''}`}
              onClick={() => setFilterStatus(status)}
            >
              {status === 'Pending' ? 'Hazırlanıyor' : status === 'Completed' ? 'Tamamlandı' : status === 'Cancelled' ? 'İptal' : status}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="orders-list">
          {filteredOrders.length === 0 ? (
            <div className="no-orders card">
              <p>Bu kategoride sipariş bulunmuyor</p>
            </div>
          ) : (
            filteredOrders.map(order => (
              <div key={order.id} className="order-card card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Sipariş #{order.id}</h3>
                    <p className="cafe-name">📍 {order.cafe_name}</p>
                    <p className="order-date">🕐 {formatDate(order.order_date)}</p>
                  </div>
                  <div className="order-status" style={{ borderLeft: `4px solid ${getStatusColor(order.status)}` }}>
                    <span className="status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>

                <div className="order-items">
                  <h4>Ürünler:</h4>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="order-footer">
                  <div className="total-price">
                    <strong>Toplam: {order.total_price.toFixed(2)} ₺</strong>
                  </div>
                  <div className="order-actions">
                    {order.status === 'pending' && (
                      <>
                        <button className="btn btn-secondary btn-small">Takip Et</button>
                        <button className="btn btn-danger btn-small">İptal Et</button>
                      </>
                    )}
                    {order.status === 'completed' && (
                      <button className="btn btn-primary btn-small">Yeniden Sipariş Ver</button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
