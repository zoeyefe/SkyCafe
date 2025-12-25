import React, { useState } from 'react';
import '../styles/menu.css';

function MenuPage() {
  const [menus, setMenus] = useState([
    {
      id: 1,
      cafe_id: 1,
      name: 'Espresso',
      description: 'Yoğun ve güzel espresso',
      price: 25.00,
      category: 'Kahveler',
      image_url: '☕'
    },
    {
      id: 2,
      cafe_id: 1,
      name: 'Cappuccino',
      description: 'Sütlü ve köpüklü kahve',
      price: 35.00,
      category: 'Kahveler',
      image_url: '🥛'
    },
    {
      id: 3,
      cafe_id: 1,
      name: 'Americano',
      description: 'Su ile dilüe edilmiş espresso',
      price: 28.00,
      category: 'Kahveler',
      image_url: '☕'
    },
    {
      id: 4,
      cafe_id: 1,
      name: 'Latte',
      description: 'Süt ile yapılan yumuşak kahve',
      price: 38.00,
      category: 'Kahveler',
      image_url: '🥛'
    },
    {
      id: 5,
      cafe_id: 1,
      name: 'Croissant',
      description: 'Yufka tabakası cıvatalı pastane',
      price: 45.00,
      category: 'Pastaneler',
      image_url: '🥐'
    },
    {
      id: 6,
      cafe_id: 1,
      name: 'Cheesecake',
      description: 'Ev yapımı peynirli kek',
      price: 55.00,
      category: 'Pastaneler',
      image_url: '🍰'
    }
  ]);

  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', 'Kahveler', 'Pastaneler', 'Serinler'];

  const filteredMenus = selectedCategory === 'Tümü'
    ? menus
    : menus.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    const existingItem = cart.find(c => c.id === item.id);
    if (existingItem) {
      setCart(cart.map(c =>
        c.id === item.id
          ? { ...c, quantity: c.quantity + 1 }
          : c
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(c => c.id !== itemId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="menu-page">
      <div className="container">
        <div className="menu-header">
          <h1>Menü</h1>
          <p className="subtitle">Lezzetli kahveler ve pastaneler</p>
        </div>

        <div className="menu-layout">
          {/* Menu Items */}
          <div className="menu-items">
            {/* Category Filter */}
            <div className="category-filter">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="items-grid">
              {filteredMenus.map(item => (
                <div key={item.id} className="menu-item card">
                  <div className="item-icon">{item.image_url}</div>
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-price">{item.price.toFixed(2)} ₺</div>
                  <button
                    className="btn btn-secondary"
                    onClick={() => addToCart(item)}
                  >
                    Sepete Ekle
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Cart */}
          <aside className="cart-sidebar">
            <div className="cart-container card">
              <h2>🛒 Sepetim</h2>

              {cart.length === 0 ? (
                <p className="empty-cart">Sepet boş</p>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map(item => (
                      <div key={item.id} className="cart-item">
                        <div className="item-info">
                          <span>{item.name}</span>
                          <span className="quantity">x{item.quantity}</span>
                        </div>
                        <div className="item-price">
                          {(item.price * item.quantity).toFixed(2)} ₺
                        </div>
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="cart-summary">
                    <div className="summary-row">
                      <span>Toplam:</span>
                      <strong>{totalPrice.toFixed(2)} ₺</strong>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                      Ödemeye Geç
                    </button>
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
