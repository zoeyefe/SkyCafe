import React, { useState } from 'react';
import '../styles/admin.css';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Örnek veriler
  const [stats] = useState({
    totalOrders: 127,
    totalRevenue: 15480.50,
    totalUsers: 342,
    totalCafes: 3
  });

  const [cafes] = useState([
    { id: 1, name: 'Sky Café', email: 'info@skycafe.com', orders: 45 },
    { id: 2, name: 'Cloud Coffee House', email: 'contact@cloudcoffee.com', orders: 38 },
    { id: 3, name: 'Altitude Roastery', email: 'hello@altitude.com', orders: 44 }
  ]);

  const [users] = useState([
    { id: 1, name: 'Efe Koçak', email: 'efe@example.com', role: 'admin' },
    { id: 2, name: 'Ahmet Yıldız', email: 'ahmet@example.com', role: 'customer' },
    { id: 3, name: 'Ayşe Kara', email: 'ayse@example.com', role: 'cafe_owner' }
  ]);

  const [pendingOrders] = useState([
    { id: 1, cafe: 'Sky Café', customer: 'Mehmet D.', total: 98.00, time: '15 dk önce' },
    { id: 2, cafe: 'Cloud Coffee House', customer: 'Zeynep T.', total: 63.00, time: '32 dk önce' },
    { id: 3, cafe: 'Altitude Roastery', customer: 'Ali K.', total: 82.00, time: '45 dk önce' }
  ]);

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>⚙️ Yönetim Paneli</h1>
        <p>SkyCafe İşletimi Kontrol Merkezi</p>
      </div>

      {/* Navigation Tabs */}
      <div className="admin-tabs">
        <button
          className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button
          className={`tab-btn ${activeTab === 'cafes' ? 'active' : ''}`}
          onClick={() => setActiveTab('cafes')}
        >
          ☕ Kafeler
        </button>
        <button
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          👥 Kullanıcılar
        </button>
        <button
          className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          📦 Siparişler
        </button>
      </div>

      <div className="container">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="tab-content">
            <h2>Dashboard</h2>
            <div className="stats-grid">
              <div className="stat-card card">
                <div className="stat-icon">📦</div>
                <h3>Toplam Sipariş</h3>
                <p className="stat-number">{stats.totalOrders}</p>
              </div>
              <div className="stat-card card">
                <div className="stat-icon">💰</div>
                <h3>Toplam Gelir</h3>
                <p className="stat-number">{stats.totalRevenue.toFixed(2)} ₺</p>
              </div>
              <div className="stat-card card">
                <div className="stat-icon">👥</div>
                <h3>Toplam Kullanıcı</h3>
                <p className="stat-number">{stats.totalUsers}</p>
              </div>
              <div className="stat-card card">
                <div className="stat-icon">☕</div>
                <h3>Toplam Kafe</h3>
                <p className="stat-number">{stats.totalCafes}</p>
              </div>
            </div>

            {/* Recent Orders */}
            <h2 style={{ marginTop: '2rem' }}>Son Siparişler</h2>
            <div className="recent-orders card">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Kafe</th>
                    <th>Müşteri</th>
                    <th>Tutar</th>
                    <th>Zaman</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingOrders.map(order => (
                    <tr key={order.id}>
                      <td>{order.cafe}</td>
                      <td>{order.customer}</td>
                      <td>{order.total.toFixed(2)} ₺</td>
                      <td>{order.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Cafes Tab */}
        {activeTab === 'cafes' && (
          <div className="tab-content">
            <h2>Kafeler Yönetimi</h2>
            <button className="btn btn-primary" style={{ marginBottom: '1rem' }}>
              ➕ Yeni Kafe Ekle
            </button>
            <div className="admin-table-container card">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Kafe Adı</th>
                    <th>Email</th>
                    <th>Sipariş Sayısı</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {cafes.map(cafe => (
                    <tr key={cafe.id}>
                      <td>{cafe.name}</td>
                      <td>{cafe.email}</td>
                      <td>{cafe.orders}</td>
                      <td>
                        <button className="btn-small">✏️ Düzenle</button>
                        <button className="btn-small btn-danger">🗑️ Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="tab-content">
            <h2>Kullanıcılar Yönetimi</h2>
            <button className="btn btn-primary" style={{ marginBottom: '1rem' }}>
              ➕ Yeni Kullanıcı Ekle
            </button>
            <div className="admin-table-container card">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>İsim</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span className="role-badge">
                          {user.role === 'admin' ? '👑 Admin' : user.role === 'cafe_owner' ? '☕ Kafe Sahibi' : '👤 Müşteri'}
                        </span>
                      </td>
                      <td>
                        <button className="btn-small">✏️ Düzenle</button>
                        <button className="btn-small btn-danger">🗑️ Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="tab-content">
            <h2>Siparişler Yönetimi</h2>
            <div className="admin-table-container card">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Sipariş ID</th>
                    <th>Kafe</th>
                    <th>Müşteri</th>
                    <th>Tutar</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingOrders.map(order => (
                    <tr key={order.id}>
                      <td>#{order.id}</td>
                      <td>{order.cafe}</td>
                      <td>{order.customer}</td>
                      <td>{order.total.toFixed(2)} ₺</td>
                      <td>
                        <button className="btn-small">👁️ Görüntüle</button>
                        <button className="btn-small btn-success">✓ Onayla</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
