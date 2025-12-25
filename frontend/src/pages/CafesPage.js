import React, { useState } from 'react';
import '../styles/cafes.css';

function CafesPage() {
  const [cafes] = useState([
    {
      id: 1,
      name: 'Sky Café',
      description: 'Şehrin en yüksek yerinde bulunan havai kafe',
      address: 'Göktürk Mah. No:1',
      phone: '0212-555-0001',
      email: 'info@skycafe.com',
      image_url: '☕',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Cloud Coffee House',
      description: 'Bulut gibi hafif espresso deneyimi',
      address: 'Beyoğlu Mah. No:42',
      phone: '0212-555-0002',
      email: 'contact@cloudcoffee.com',
      image_url: '☁️',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Altitude Roastery',
      description: 'Yüksek rakımlı kahve kavrulması',
      address: 'Galata Mah. No:15',
      phone: '0212-555-0003',
      email: 'hello@altitude.com',
      image_url: '🏔️',
      rating: 4.9
    }
  ]);

  const [selectedCafe, setSelectedCafe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCafes = cafes.filter(cafe =>
    cafe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cafes-page">
      <div className="container">
        <h1>Tüm Kafeler</h1>
        <p className="subtitle">Yakınızdaki tüm kafeleri keşfedin</p>

        {/* Search Bar */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Kafe ara..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Cafes Grid */}
        <div className="cafes-grid">
          {filteredCafes.map(cafe => (
            <div key={cafe.id} className="cafe-card card">
              <div className="cafe-icon">{cafe.image_url}</div>
              <h2>{cafe.name}</h2>
              <p className="description">{cafe.description}</p>
              <div className="cafe-rating">
                {'⭐'.repeat(Math.floor(cafe.rating))} <span>{cafe.rating}</span>
              </div>
              <div className="cafe-info">
                <p>📍 {cafe.address}</p>
                <p>📞 {cafe.phone}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => setSelectedCafe(cafe)}
              >
                Menüyü Gör
              </button>
            </div>
          ))}
        </div>

        {/* Selected Cafe Details */}
        {selectedCafe && (
          <div className="cafe-details modal">
            <div className="modal-content">
              <button
                className="close-btn"
                onClick={() => setSelectedCafe(null)}
              >
                ✕
              </button>
              <h2>{selectedCafe.name}</h2>
              <p>{selectedCafe.description}</p>
              <div className="details-info">
                <p><strong>Adres:</strong> {selectedCafe.address}</p>
                <p><strong>Telefon:</strong> {selectedCafe.phone}</p>
                <p><strong>Email:</strong> {selectedCafe.email}</p>
              </div>
              <button className="btn btn-secondary">Şimdi Sipariş Ver</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CafesPage;
