const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Menu data with initial values
let menuData = {
  ice: {
    name: "아메리카노 (아이스)",
    price: 5000,
    stock: 20,
    orders: 0
  },
  hot: {
    name: "아메리카노 (핫)",
    price: 5500,
    stock: 20,
    orders: 0
  },
  latte: {
    name: "카페라떼",
    price: 6000,
    stock: 20,
    orders: 0
  }
};

let totalSales = 0;

// Routes

// GET - Fetch all menu data
app.get('/api/menu', (req, res) => {
  res.json({
    menu: menuData,
    totalSales: totalSales,
    totalOrders: menuData.ice.orders + menuData.hot.orders + menuData.latte.orders
  });
});

// POST - Place an order
app.post('/api/order', (req, res) => {
  const { type, shot, syrup } = req.body;

  if (!menuData[type]) {
    return res.status(400).json({ error: "Invalid menu type" });
  }

  const item = menuData[type];

  if (item.stock <= 0) {
    return res.status(400).json({ error: "재고가 부족합니다." });
  }

  let extraPrice = 0;
  let optionText = "";

  if (shot) {
    extraPrice += 500;
    optionText += "샷 추가 ";
  }

  if (syrup) {
    extraPrice += 500;
    optionText += "시럽 추가 ";
  }

  const finalPrice = item.price + extraPrice;

  // Update data
  item.orders++;
  item.stock--;
  totalSales += finalPrice;

  res.json({
    success: true,
    message: item.name + " 주문 완료!",
    options: optionText || "없음",
    price: finalPrice,
    menu: menuData,
    totalSales: totalSales
  });
});

// GET - Admin data
app.get('/api/admin', (req, res) => {
  const totalOrders = menuData.ice.orders + menuData.hot.orders + menuData.latte.orders;
  res.json({
    menu: menuData,
    totalOrders: totalOrders,
    totalSales: totalSales
  });
});

// POST - Reset admin data
app.post('/api/admin/reset', (req, res) => {
  menuData.ice.orders = 0;
  menuData.ice.stock = 20;
  menuData.hot.orders = 0;
  menuData.hot.stock = 20;
  menuData.latte.orders = 0;
  menuData.latte.stock = 20;
  totalSales = 0;

  res.json({ success: true, message: "데이터가 초기화되었습니다." });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`☕ 커피 서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`http://localhost:${PORT} 에서 접속하세요.`);
  console.log(`다른 컴퓨터에서는 http://YOUR_IP:${PORT} 로 접속하세요.`);
});
