import React, { useState } from 'react';
import '../styles/login.css';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.email) newErrors.email = 'Email gereklidir';
    if (!formData.password) newErrors.password = 'Şifre gereklidir';

    if (!isLogin) {
      if (!formData.name) newErrors.name = 'İsim gereklidir';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Şifreler uyuşmıyor';
      }
    }

    if (Object.keys(newErrors).length === 0) {
      alert(isLogin ? 'Giriş başarılı!' : 'Kayıt başarılı!');
      // API çağrısı yapılacak
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box card">
          <div className="login-header">
            <h1>☕ SkyCafe</h1>
            <p>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">İsim *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ornek@email.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Şifre *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Şifreniz"
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Şifre Doğrulama *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Şifrenizi tekrar girin"
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </button>
          </form>

          <div className="login-footer">
            <p>
              {isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({});
                  setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                }}
                className="toggle-btn"
              >
                {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
              </button>
            </p>
          </div>

          {isLogin && (
            <div className="demo-credentials">
              <p>Demo Hesabı:</p>
              <small>Email: efe@example.com</small><br />
              <small>Şifre: demo123</small>
            </div>
          )}
        </div>

        <div className="login-side-image">
          <div className="image-content">
            <h2>SkyCafe'ye Hoşgeldiniz</h2>
            <p>En iyi kahve deneyimini yükseklerde yaşayın</p>
            <div className="features-list">
              <div>✓ Kolay Sipariş</div>
              <div>✓ Hızlı Teslimat</div>
              <div>✓ Kaliteli Kahve</div>
              <div>✓ Güvenli Ödeme</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
