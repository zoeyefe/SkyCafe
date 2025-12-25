-- SkyCafe Örnek Veri

-- Cafe Verileri
INSERT INTO cafes (name, description, address, phone, email, opening_time, closing_time) VALUES
('Sky Café', 'Şehrin en yüksek yerinde bulunan havai kafe', 'Göktürk Mah. No:1', '0212-555-0001', 'info@skycafe.com', '07:00:00', '23:00:00'),
('Cloud Coffee House', 'Bulut gibi hafif espresso deneyimi', 'Beyoğlu Mah. No:42', '0212-555-0002', 'contact@cloudcoffee.com', '08:00:00', '22:00:00'),
('Altitude Roastery', 'Yüksek rakımlı kahve kavrulması', 'Galata Mah. No:15', '0212-555-0003', 'hello@altitude.com', '07:30:00', '21:30:00');

-- Menu Verileri
INSERT INTO menus (cafe_id, name, description, price, category, is_available) VALUES
(1, 'Espresso', 'Yoğun ve güzel espresso', 25.00, 'Kahveler', true),
(1, 'Cappuccino', 'Sütlü ve köpüklü kahve', 35.00, 'Kahveler', true),
(1, 'Americano', 'Su ile dilüe edilmiş espresso', 28.00, 'Kahveler', true),
(1, 'Latte', 'Süt ile yapılan yumuşak kahve', 38.00, 'Kahveler', true),
(1, 'Croissant', 'Yufka tabakası cıvatalı pastane', 45.00, 'Pastaneler', true),
(1, 'Cheesecake', 'Ev yapımı peynirli kek', 55.00, 'Pastaneler', true),
(2, 'Flat White', 'Mikro köpüklü sütlü kahve', 40.00, 'Kahveler', true),
(2, 'Mocha', 'Kahve ve çikolata karışımı', 42.00, 'Kahveler', true),
(3, 'Cold Brew', 'Soğuk fermantasyon kahvesi', 32.00, 'Serinler', true),
(3, 'Iced Latte', 'Buzlu süt kahvesi', 40.00, 'Serinler', true);

-- User Verileri (Demo)
INSERT INTO users (name, email, phone, password_hash, role) VALUES
('Efe Koçak', 'efe@example.com', '05551234567', '$2b$10$...', 'admin'),
('Ahmet Yıldız', 'ahmet@example.com', '05559876543', '$2b$10$...', 'customer'),
('Ayşe Kara', 'ayse@example.com', '05556789012', '$2b$10$...', 'cafe_owner');
