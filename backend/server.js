const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ana Route
app.get('/', (req, res) => {
  res.json({
    message: 'SkyCafe API',
    version: '0.1.0',
    status: 'Çalışıyor ✓'
  });
});

// Routes
app.use('/api/cafes', require('./routes/cafes'));
app.use('/api/menu', require('./routes/menu'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/users', require('./routes/users'));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Sunucu Hatası',
    message: err.message
  });
});

// 404 Handling
app.use((req, res) => {
  res.status(404).json({
    error: 'Route Bulunamadı',
    path: req.path
  });
});

app.listen(PORT, () => {
  console.log(`🚀 SkyCafe Backend ${PORT} portunda çalışıyor`);
  console.log(`http://localhost:${PORT}`);
});
