const express = require('express');
const router = express.Router();

// Örnek Kullanıcı Verileri
const users = [
  {
    id: 1,
    name: 'Efe Koçak',
    email: 'efe@example.com',
    phone: '05551234567',
    role: 'admin',
    is_active: true,
    created_at: new Date()
  },
  {
    id: 2,
    name: 'Ahmet Yıldız',
    email: 'ahmet@example.com',
    phone: '05559876543',
    role: 'customer',
    is_active: true,
    created_at: new Date()
  },
  {
    id: 3,
    name: 'Ayşe Kara',
    email: 'ayse@example.com',
    phone: '05556789012',
    role: 'cafe_owner',
    is_active: true,
    created_at: new Date()
  }
];

// GET - Tüm kullanıcıları getir
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// GET - Belirli bir kullanıcıyı getir
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Kullanıcı bulunamadı'
    });
  }

  // Şifre hash'i geri dönderme (güvenlik)
  const { ...userWithoutPassword } = user;
  
  res.json({
    success: true,
    data: userWithoutPassword
  });
});

// POST - Yeni kullanıcı ekle (Kayıt)
router.post('/register', (req, res) => {
  const { name, email, phone, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Gerekli alanlar eksik'
    });
  }

  // Email kontrolü
  if (users.some(u => u.email === email)) {
    return res.status(400).json({
      success: false,
      message: 'Bu email zaten kayıtlı'
    });
  }

  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email,
    phone,
    role: role || 'customer',
    is_active: true,
    created_at: new Date()
    // Not: Gerçek uygulamada şifre bcrypt ile hash'lenecek
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'Kullanıcı başarıyla oluşturuldu',
    data: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    }
  });
});

// POST - Giriş (Login)
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email ve şifre gereklidir'
    });
  }

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Email veya şifre hatalı'
    });
  }

  res.json({
    success: true,
    message: 'Giriş başarılı',
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    },
    token: 'jwt_token_will_be_generated_here'
  });
});

// PUT - Kullanıcıyı güncelle
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Kullanıcı bulunamadı'
    });
  }

  const { name, phone, role, is_active } = req.body;

  if (name) user.name = name;
  if (phone) user.phone = phone;
  if (role) user.role = role;
  if (is_active !== undefined) user.is_active = is_active;

  res.json({
    success: true,
    message: 'Kullanıcı başarıyla güncellendi',
    data: user
  });
});

// DELETE - Kullanıcıyı sil
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Kullanıcı bulunamadı'
    });
  }

  const deletedUser = users.splice(index, 1);

  res.json({
    success: true,
    message: 'Kullanıcı başarıyla silindi',
    data: deletedUser[0]
  });
});

module.exports = router;
