const express = require('express');
const router = express.Router();

// Örnek Cafeler Verileri (gelecekte veritabanından çekilecek)
const cafes = [
  {
    id: 1,
    name: 'Sky Café',
    description: 'Şehrin en yüksek yerinde bulunan havai kafe',
    address: 'Göktürk Mah. No:1',
    phone: '0212-555-0001',
    email: 'info@skycafe.com',
    opening_time: '07:00:00',
    closing_time: '23:00:00'
  },
  {
    id: 2,
    name: 'Cloud Coffee House',
    description: 'Bulut gibi hafif espresso deneyimi',
    address: 'Beyoğlu Mah. No:42',
    phone: '0212-555-0002',
    email: 'contact@cloudcoffee.com',
    opening_time: '08:00:00',
    closing_time: '22:00:00'
  },
  {
    id: 3,
    name: 'Altitude Roastery',
    description: 'Yüksek rakımlı kahve kavrulması',
    address: 'Galata Mah. No:15',
    phone: '0212-555-0003',
    email: 'hello@altitude.com',
    opening_time: '07:30:00',
    closing_time: '21:30:00'
  }
];

// GET - Tüm kafeleri getir
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: cafes,
    count: cafes.length
  });
});

// GET - Belirli bir kafesi getir
router.get('/:id', (req, res) => {
  const cafe = cafes.find(c => c.id === parseInt(req.params.id));
  
  if (!cafe) {
    return res.status(404).json({
      success: false,
      message: 'Kafe bulunamadı'
    });
  }

  res.json({
    success: true,
    data: cafe
  });
});

// POST - Yeni kafe ekle
router.post('/', (req, res) => {
  const { name, description, address, phone, email, opening_time, closing_time } = req.body;

  // Validasyon
  if (!name || !description || !email) {
    return res.status(400).json({
      success: false,
      message: 'Gerekli alanlar eksik'
    });
  }

  const newCafe = {
    id: cafes.length > 0 ? Math.max(...cafes.map(c => c.id)) + 1 : 1,
    name,
    description,
    address,
    phone,
    email,
    opening_time,
    closing_time
  };

  cafes.push(newCafe);

  res.status(201).json({
    success: true,
    message: 'Kafe başarıyla eklendi',
    data: newCafe
  });
});

// PUT - Kafeyi güncelle
router.put('/:id', (req, res) => {
  const cafe = cafes.find(c => c.id === parseInt(req.params.id));

  if (!cafe) {
    return res.status(404).json({
      success: false,
      message: 'Kafe bulunamadı'
    });
  }

  const { name, description, address, phone, email, opening_time, closing_time } = req.body;

  if (name) cafe.name = name;
  if (description) cafe.description = description;
  if (address) cafe.address = address;
  if (phone) cafe.phone = phone;
  if (email) cafe.email = email;
  if (opening_time) cafe.opening_time = opening_time;
  if (closing_time) cafe.closing_time = closing_time;

  res.json({
    success: true,
    message: 'Kafe başarıyla güncellendi',
    data: cafe
  });
});

// DELETE - Kafeyi sil
router.delete('/:id', (req, res) => {
  const index = cafes.findIndex(c => c.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Kafe bulunamadı'
    });
  }

  const deletedCafe = cafes.splice(index, 1);

  res.json({
    success: true,
    message: 'Kafe başarıyla silindi',
    data: deletedCafe[0]
  });
});

module.exports = router;
