const express = require('express');
const router = express.Router();

// Örnek Siparış Verileri
const orders = [
  {
    id: 1,
    user_id: 1,
    cafe_id: 1,
    total_price: 98.00,
    status: 'completed',
    order_date: new Date(),
    delivery_address: 'Örnek Cad. No:1',
    notes: 'Çok şekerli olsun'
  },
  {
    id: 2,
    user_id: 1,
    cafe_id: 1,
    total_price: 63.00,
    status: 'pending',
    order_date: new Date(),
    delivery_address: 'Örnek Cad. No:1',
    notes: 'Normal'
  }
];

// GET - Tüm siparişleri getir
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: orders,
    count: orders.length
  });
});

// GET - Belirli bir siparişi getir
router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));

  if (!order) {
    return res.status(404).json({
      success: false,
      message: 'Sipariş bulunamadı'
    });
  }

  res.json({
    success: true,
    data: order
  });
});

// GET - Kullanıcının siparişlerini getir
router.get('/user/:userId', (req, res) => {
  const userOrders = orders.filter(o => o.user_id === parseInt(req.params.userId));

  res.json({
    success: true,
    data: userOrders,
    count: userOrders.length
  });
});

// POST - Yeni sipariş ekle
router.post('/', (req, res) => {
  const { user_id, cafe_id, total_price, delivery_address, notes } = req.body;

  if (!user_id || !cafe_id || !total_price) {
    return res.status(400).json({
      success: false,
      message: 'Gerekli alanlar eksik'
    });
  }

  const newOrder = {
    id: orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1,
    user_id,
    cafe_id,
    total_price,
    status: 'pending',
    order_date: new Date(),
    delivery_address,
    notes
  };

  orders.push(newOrder);

  res.status(201).json({
    success: true,
    message: 'Sipariş başarıyla oluşturuldu',
    data: newOrder
  });
});

// PUT - Sipariş durumunu güncelle
router.put('/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));

  if (!order) {
    return res.status(404).json({
      success: false,
      message: 'Sipariş bulunamadı'
    });
  }

  const { status, delivery_address, notes } = req.body;

  if (status) order.status = status;
  if (delivery_address) order.delivery_address = delivery_address;
  if (notes) order.notes = notes;

  res.json({
    success: true,
    message: 'Sipariş başarıyla güncellendi',
    data: order
  });
});

// DELETE - Sipariş sil
router.delete('/:id', (req, res) => {
  const index = orders.findIndex(o => o.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Sipariş bulunamadı'
    });
  }

  const deletedOrder = orders.splice(index, 1);

  res.json({
    success: true,
    message: 'Sipariş başarıyla silindi',
    data: deletedOrder[0]
  });
});

module.exports = router;
