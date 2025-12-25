import React from 'react';
import '../styles/home.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>☕ SkyCafe'ye Hoşgeldiniz</h1>
          <p>En iyi kahve deneyimini yükseklerde yaşayın</p>
          <button className="btn btn-primary btn-large">
            Şimdi Başla
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <h2>Neden SkyCafe?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Kolay Sipariş</h3>
            <p>Birkaç tıklama ile favori kahvenizi siparişleyin</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Hızlı Teslimat</h3>
            <p>En kısa sürede kapınıza ulaştırıyoruz</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Kaliteli Kahve</h3>
            <p>Sadece en iyi kafelerin ürünleri</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Güvenli Ödeme</h3>
            <p>Tüm ödeme yöntemleri desteklenir</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Başka İnsanlar Ne Diyor?</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"En iyi kahve ve hizmet!" - Ahmet Y.</p>
            <rating>⭐⭐⭐⭐⭐</rating>
          </div>
          <div className="testimonial">
            <p>"Çok lezzetli ve hızlı teslimat!" - Ayşe K.</p>
            <rating>⭐⭐⭐⭐⭐</rating>
          </div>
          <div className="testimonial">
            <p>"Harika bir deneyim, çok beğendim!" - Mehmet D.</p>
            <rating>⭐⭐⭐⭐⭐</rating>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
