const express = require('express');
const router = express.Router();

// Örnek Menü Verileri
const menus = [
  {
    id: 1,
    cafe_id: 1,
    name: 'Espresso',
    description: 'Yoğun ve güzel espresso',
    price: 25.00,
    category: 'Kahveler',
    is_available: true
  },
  {
    id: 2,
    cafe_id: 1,
    name: 'Cappuccino',
    description: 'Sütlü ve köpüklü kahve',
    price: 35.00,
    category: 'Kahveler',
    is_available: true
  },
  {
    id: 3,
    cafe_id: 1,
    name: 'Americano',
    description: 'Su ile dilüe edilmiş espresso',
    price: 28.00,
    category: 'Kahveler',
    is_available: true
  },
  {
    id: 4,
    cafe_id: 1,
    name: 'Latte',
    description: 'Süt ile yapılan yumuşak kahve',
    price: 38.00,
    category: 'Kahveler',
    is_available: true
  },
  {
    id: 5,
    cafe_id: 1,
    name: 'Croissant',
    description: 'Yufka tabakası cıvatalı pastane',
    price: 45.00,
    category: 'Pastaneler',
    is_available: true
  },
  {
    id: 6,
    cafe_id: 1,
    name: 'Cheesecake',
    description: 'Ev yapımı peynirli kek',
    price: 55.00,
    category: 'Pastaneler',
    is_available: true
  }
];

// GET - Tüm menüleri getir
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: menus,
    count: menus.length
  });
});

// GET - Belirli bir menüyü getir
router.get('/:id', (req, res) => {
  const menu = menus.find(m => m.id === parseInt(req.params.id));

  if (!menu) {
    return res.status(404).json({
      success: false,
      message: 'Menü bulunamadı'
    });
  }

  res.json({
    success: true,
    data: menu
  });
});

// GET - Kafenin menüsünü getir
router.get('/cafe/:cafeId', (req, res) => {
  const cafeMenus = menus.filter(m => m.cafe_id === parseInt(req.params.cafeId));

  res.json({
    success: true,
    data: cafeMenus,
    count: cafeMenus.length
  });
});

// POST - Yeni menü ekle
router.post('/', (req, res) => {
  const { cafe_id, name, description, price, category } = req.body;

  if (!cafe_id || !name || !price) {
    return res.status(400).json({
      success: false,
      message: 'Gerekli alanlar eksik'
    });
  }

  const newMenu = {
    id: menus.length > 0 ? Math.max(...menus.map(m => m.id)) + 1 : 1,
    cafe_id,
    name,
    description,
    price,
    category,
    is_available: true
  };

  menus.push(newMenu);

  res.status(201).json({
    success: true,
    message: 'Menü başarıyla eklendi',
    data: newMenu
  });
});

// PUT - Menüyü güncelle
router.put('/:id', (req, res) => {
  const menu = menus.find(m => m.id === parseInt(req.params.id));

  if (!menu) {
    return res.status(404).json({
      success: false,
      message: 'Menü bulunamadı'
    });
  }

  const { name, description, price, category, is_available } = req.body;

  if (name) menu.name = name;
  if (description) menu.description = description;
  if (price) menu.price = price;
  if (category) menu.category = category;
  if (is_available !== undefined) menu.is_available = is_available;

  res.json({
    success: true,
    message: 'Menü başarıyla güncellendi',
    data: menu
  });
});

// DELETE - Menüyü sil
router.delete('/:id', (req, res) => {
  const index = menus.findIndex(m => m.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Menü bulunamadı'
    });
  }

  const deletedMenu = menus.splice(index, 1);

  res.json({
    success: true,
    message: 'Menü başarıyla silindi',
    data: deletedMenu[0]
  });
});

module.exports = router;
