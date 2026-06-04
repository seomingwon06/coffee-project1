<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>커피 구매 사이트</title>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:Arial, sans-serif;
    }

    body{
      background:#f5f1eb;
      padding:40px;
      color:#333;
    }

    .container{
      max-width:1100px;
      margin:auto;
    }

    h1{
      text-align:center;
      margin-bottom:30px;
      color:#5c3d2e;
    }

    .top-buttons{
      display:flex;
      justify-content:center;
      gap:20px;
      margin-bottom:30px;
    }

    button{
      border:none;
      border-radius:10px;
      padding:12px 20px;
      cursor:pointer;
      font-size:15px;
      font-weight:bold;
      transition:0.3s;
    }

    button:hover{
      opacity:0.9;
      transform:translateY(-2px);
    }

    .order-btn{
      background:#8b5e3c;
      color:white;
    }

    .admin-btn{
      background:#444;
      color:white;
    }

    .section{
      display:none;
      background:white;
      padding:30px;
      border-radius:15px;
      box-shadow:0 4px 12px rgba(0,0,0,0.1);
    }

    .visible{
      display:block;
    }

    .menu-grid{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:20px;
      margin-top:20px;
    }

    .menu-card{
      border:1px solid #ddd;
      border-radius:15px;
      padding:20px;
      background:#fafafa;
    }

    .menu-card h3{
      margin-bottom:10px;
      color:#5c3d2e;
    }

    .price{
      font-size:22px;
      font-weight:bold;
      margin-bottom:15px;
    }

    .option-box{
      margin-bottom:10px;
    }

    .option-box label{
      display:block;
      margin-bottom:5px;
    }

    .buy-btn{
      width:100%;
      background:#c27b39;
      color:white;
      margin-top:10px;
    }

    table{
      width:100%;
      border-collapse:collapse;
      margin-top:20px;
    }

    th, td{
      border:1px solid #ddd;
      padding:14px;
      text-align:center;
    }

    th{
      background:#8b5e3c;
      color:white;
    }

    .summary{
      margin-top:25px;
      background:#f3f3f3;
      padding:20px;
      border-radius:10px;
      line-height:2;
      font-size:18px;
    }

    .reset-btn{
      background:#d9534f;
      color:white;
      margin-top:20px;
    }
  </style>
</head>

<body>

<div class="container">

  <h1>☕ 커피 구매 사이트</h1>

  <div class="top-buttons">
    <button class="order-btn" onclick="showSection('menu')">주문 버튼</button>
    <button class="admin-btn" onclick="showSection('admin')">관리자 버튼</button>
  </div>

  <!-- 주문 화면 -->
  <div id="menu" class="section visible">

    <h2>메뉴 주문</h2>

    <div class="menu-grid">

      <!-- 아이스 아메리카노 -->
      <div class="menu-card">
        <h3>아메리카노 (아이스)</h3>
        <div class="price">5,000원</div>

        <div class="option-box">
          <label>
            <input type="checkbox" id="ice-shot">
            샷 추가 (+500원)
          </label>
          <label>
            <input type="checkbox" id="ice-syrup">
            시럽 추가 (+500원)
          </label>
        </div>

        <button class="buy-btn" onclick="orderCoffee('ice')">주문하기</button>
      </div>

      <!-- 핫 아메리카노 -->
      <div class="menu-card">
        <h3>아메리카노 (핫)</h3>
        <div class="price">5,500원</div>

        <div class="option-box">
          <label>
            <input type="checkbox" id="hot-shot">
            샷 추가 (+500원)
          </label>
          <label>
            <input type="checkbox" id="hot-syrup">
            시럽 추가 (+500원)
          </label>
        </div>

        <button class="buy-btn" onclick="orderCoffee('hot')">주문하기</button>
      </div>

      <!-- 카페라떼 -->
      <div class="menu-card">
        <h3>카페라떼</h3>
        <div class="price">6,000원</div>

        <div class="option-box">
          <label>
            <input type="checkbox" id="latte-shot">
            샷 추가 (+500원)
          </label>
          <label>
            <input type="checkbox" id="latte-syrup">
            시럽 추가 (+500원)
          </label>
        </div>

        <button class="buy-btn" onclick="orderCoffee('latte')">주문하기</button>
      </div>

    </div>
  </div>

  <!-- 관리자 화면 -->
  <div id="admin" class="section">

    <h2>관리자 페이지</h2>

    <table>
      <thead>
      <tr>
        <th>메뉴</th>
        <th>주문 수량</th>
        <th>재고</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>아메리카노 (아이스)</td>
        <td id="ice-order">0</td>
        <td id="ice-stock">20</td>
      </tr>
      <tr>
        <td>아메리카노 (핫)</td>
        <td id="hot-order">0</td>
        <td id="hot-stock">20</td>
      </tr>
      <tr>
        <td>카페라떼</td>
        <td id="latte-order">0</td>
        <td id="latte-stock">20</td>
      </tr>
      </tbody>
    </table>

    <div class="summary">
      <div>📦 총 주문 수량: <strong id="total-orders">0</strong>개</div>
      <div>💰 총 매출: <strong id="total-sales">0</strong>원</div>
    </div>

    <button class="reset-btn" onclick="resetData()">데이터 초기화</button>

  </div>

</div>

<script>

  const API_BASE = window.location.origin + '/api';

  async function orderCoffee(type){
    const shot = document.getElementById(type + '-shot').checked;
    const syrup = document.getElementById(type + '-syrup').checked;

    try {
      const response = await fetch(API_BASE + '/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, shot, syrup })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "주문에 실패했습니다.");
        return;
      }

      alert(
        data.message + "\n\n" +
        "옵션: " + data.options + "\n" +
        "총 금액: " + data.price.toLocaleString() + "원"
      );

      document.getElementById(type + '-shot').checked = false;
      document.getElementById(type + '-syrup').checked = false;

      updateAdminDisplay();
    } catch (error) {
      alert("서버 연결 오류: " + error.message);
    }
  }

  async function updateAdminDisplay(){
    try {
      const response = await fetch(API_BASE + '/admin');
      const data = await response.json();

      document.getElementById('ice-order').innerText = data.menu.ice.orders;
      document.getElementById('hot-order').innerText = data.menu.hot.orders;
      document.getElementById('latte-order').innerText = data.menu.latte.orders;

      document.getElementById('ice-stock').innerText = data.menu.ice.stock;
      document.getElementById('hot-stock').innerText = data.menu.hot.stock;
      document.getElementById('latte-stock').innerText = data.menu.latte.stock;

      document.getElementById('total-orders').innerText = data.totalOrders;
      document.getElementById('total-sales').innerText = data.totalSales.toLocaleString();
    } catch (error) {
      console.error('Admin Update Error:', error);
    }
  }

  async function resetData(){
    if (!confirm("정말로 데이터를 초기화하시겠습니까?")) return;

    try {
      const response = await fetch(API_BASE + '/admin/reset', { method: 'POST' });
      const data = await response.json();
      alert(data.message);
      updateAdminDisplay();
    } catch (error) {
      alert("초기화 실패: " + error.message);
    }
  }

  function showSection(section){
    document.getElementById('menu').classList.remove('visible');
    document.getElementById('admin').classList.remove('visible');
    document.getElementById(section).classList.add('visible');

    if (section === 'admin') {
      updateAdminDisplay();
    }
  }

  window.addEventListener('load', updateAdminDisplay);

</script>

</body>
</html>
