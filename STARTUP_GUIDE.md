# SkyCafe Projesini Çalıştırma Rehberi

## 📋 Ön Gereksinimler
- ✓ Node.js (v14 veya üstü)
- ✓ npm (v6 veya üstü)
- ✓ Git (isteğe bağlı)

## 🚀 Başlangıç Adımları

### 1️⃣ Frontend Kurulumu ve Başlatılması

```bash
# Frontend dizinine git
cd frontend

# Bağımlılıkları yükle (ilk kez)
npm install

# Geliştirme sunucusunu başlat
npm start
```

**Çıktı:**
```
Compiled successfully!

You can now view skycafe-frontend in the browser.

  Local:            http://localhost:3000
```

Frontend otomatik olarak `http://localhost:3000` adresinde açılacak.

---

### 2️⃣ Backend Kurulumu ve Başlatılması (Yeni Terminal Penceresinde)

```bash
# Backend dizinine git
cd backend

# Bağımlılıkları yükle (ilk kez)
npm install

# Geliştirme sunucusunu başlat (nodemon ile hot reload)
npm run dev
```

**Çıktı:**
```
🚀 SkyCafe Backend 5000 portunda çalışıyor
http://localhost:5000
```

Backend `http://localhost:5000` adresinde çalışacak.

---

## 📱 Tarayıcıda Erişim

| Adres | Açıklama |
|-------|----------|
| `http://localhost:3000` | Frontend uygulaması |
| `http://localhost:5000` | Backend API |
| `http://localhost:5000/api/cafes` | Kafeleri listele |
| `http://localhost:5000/api/menu` | Menüyü listele |
| `http://localhost:5000/api/orders` | Siparişleri listele |
| `http://localhost:5000/api/users` | Kullanıcıları listele |

---

## 🎯 Frontend Navigasyonu

Giriş yaptıktan sonra şu sayfalara erişebilirsin:

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Giriş ve özellikler |
| Kafeler | `/cafes` | Tüm kafeleri görüntüle |
| Menü | `/menu` | Menü ve sepet |
| Siparişler | `/orders` | Sipariş takip |
| Yönetim Paneli | `/admin` | Admin işlemleri |
| Giriş | `/login` | Giriş/Kayıt sayfası |

---

## 🔐 Demo Hesabı

```
Email: efe@example.com
Şifre: demo123
Rol: Admin
```

---

## 📝 Faydalı Komutlar

### Frontend
```bash
npm start      # Geliştirme sunucusunu başlat
npm build      # Production için build yap
npm test       # Testleri çalıştır
npm eject      # Yapılandırmayı yönet (uyarı: geri alınamaz)
```

### Backend
```bash
npm start      # Direkt server başlat
npm run dev    # Nodemon ile (hot reload)
```

---

## ⚠️ Yaygın Sorunlar ve Çözümleri

### Port zaten kullanımda
```bash
# Windows'ta 3000 portunu kullanan işlemi bul:
netstat -ano | findstr :3000

# PID'sini bul ve kapat:
taskkill /PID <PID> /F
```

### npm install hata veriyor
```bash
# npm cache'i temizle
npm cache clean --force

# Tekrar dene
npm install
```

### Hot reload çalışmıyor
Frontend: Tarayıcıyı manuel olarak yenile (F5 veya Ctrl+R)
Backend: npm run dev yerine npm start kullan

---

## 🗂️ Dosya Yapısı

```
skycafe/
├── frontend/              # React uygulaması (Port 3000)
│   ├── src/
│   │   ├── components/   # Bileşenler
│   │   ├── pages/        # Sayfalar
│   │   └── styles/       # CSS dosyaları
│   └── package.json
│
├── backend/               # Express.js API (Port 5000)
│   ├── routes/           # API rotaları
│   ├── models/           # Veritabanı modelleri
│   ├── controllers/      # İşletim mantığı
│   ├── server.js         # Ana dosya
│   └── package.json
│
└── database/              # Veritabanı dosyaları
    ├── schema.sql        # Tablo yapıları
    └── seed.sql          # Örnek veriler
```

---

## 🔗 API Endpoint Örnekleri

### Kafeleri Getir
```bash
curl http://localhost:5000/api/cafes
```

### Menü Getir
```bash
curl http://localhost:5000/api/menu
```

### Yeni Kafe Ekle
```bash
curl -X POST http://localhost:5000/api/cafes \
  -H "Content-Type: application/json" \
  -d '{"name":"Yeni Kafe","email":"yeni@kafe.com"}'
```

---

## 📚 İleri Adımlar

- [ ] Veritabanını PostgreSQL'e bağla
- [ ] JWT authentication'ı implemente et
- [ ] API entegrasyon tamamla
- [ ] Environment variables ayarla
- [ ] Testing'i ekle
- [ ] Deployment'ı hazırla

---

**Sorun mu yaşıyor? Her Terminal penceresinde bir sunucu çalıştırıldığından emin ol!**
- Terminal 1: `npm start` (Frontend)
- Terminal 2: `npm run dev` (Backend)

