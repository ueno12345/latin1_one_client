import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './order.css';

interface Order {
  'ニックネーム': string;
  '氏名': string;
  '注文商品': string;
  '注文合計': string;
  '配送先': string;
  '配送状況': boolean;
  'order-time': string;
  'mail-address': string;
  '店舗': string;
}

function Order() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

  // フィルタ用のステート
  const [nicknameFilter, setNicknameFilter] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [storeFilter, setStoreFilter] = useState<string>("");
  const [orderDateFilter, setOrderDateFilter] = useState<Date | null>(null);

  const fetchOrders = async () => {
    const response = await fetch('http://localhost:4000/acquire/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shop: "order" }),
    });

    if (response.ok) {
      const data = await response.json();
      setOrders(data.data);
      setFilteredOrders(data.data);  // 初回データ取得時にフィルタリングされた注文を設定
    } else {
      console.error("注文データの取得に失敗しました");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    let filtered = orders;

    // ニックネームで絞り込み
    if (nicknameFilter) {
      filtered = filtered.filter(order =>
        order['ニックネーム'].toLowerCase().includes(nicknameFilter.toLowerCase())
      );
    }

    // 氏名で絞り込み
    if (nameFilter) {
      filtered = filtered.filter(order =>
        order['氏名'].toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    // 店舗名で絞り込み
    if (storeFilter) {
      filtered = filtered.filter(order =>
        order['店舗'].toLowerCase().includes(storeFilter.toLowerCase())
      );
    }

// 注文日時で絞り込み（選択した日付と一致するか比較）
if (orderDateFilter) {
  const formattedOrderDateFilter = orderDateFilter.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });

  filtered = filtered.filter(order => {
    // 注文日時をDateオブジェクトに変換
    const orderDate = new Date(order['order-time']);
    const formattedOrderDate = orderDate.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });

    return formattedOrderDate === formattedOrderDateFilter; // 日付部分だけ比較
  });
}

    setFilteredOrders(filtered);
  }, [nicknameFilter, nameFilter, storeFilter, orderDateFilter, orders]);

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="order-container">
      <h2>注文状況確認画面</h2>

      <div className="filter-form">
        <div className="filter-group">
          <label>ニックネームで絞り込み：</label>
          <input
            type="text"
            value={nicknameFilter}
            onChange={(e) => setNicknameFilter(e.target.value)}
            placeholder="ニックネームで絞り込み"
          />
        </div>

        <div className="filter-group">
          <label>氏名で絞り込み：</label>
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="氏名で絞り込み"
          />
        </div>

        <div className="filter-group">
          <label>店舗名で絞り込み：</label>
          <input
            type="text"
            value={storeFilter}
            onChange={(e) => setStoreFilter(e.target.value)}
            placeholder="店舗名で絞り込み"
          />
        </div>

        <div className="filter-group">
          <label>注文日時で絞り込み：</label>
          <DatePicker
            selected={orderDateFilter}
            onChange={(date: Date | null) => setOrderDateFilter(date)}
            dateFormat="yyyy年MM月dd日"
            placeholderText="注文日を選択"
            isClearable
          />
        </div>
      </div>

      <div className="home-button-container">
        <button type="button" onClick={navigateToHome} className="home-button">
          ホームに戻る
        </button>
      </div>

      {filteredOrders.length > 0 && (
        <table className="order-table">
          <thead>
            <tr>
              <th>ニックネーム</th>
              <th>氏名</th>
              <th>注文商品</th>
              <th>注文合計</th>
              <th>配送先</th>
              <th>配送状況</th>
              <th>注文時間</th>
              <th>メールアドレス</th>
              <th>店舗</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index}>
                <td>{order['ニックネーム']}</td>
                <td>{order['氏名']}</td>
                <td>{order['注文商品']}</td>
                <td>{order['注文合計']}</td>
                <td>{order['配送先']}</td>
                <td>{order['配送状況'] ? "配送完了" : "配送待ち"}</td>
                <td>{order['order-time']}</td>
                <td>{order['mail-address']}</td>
                <td>{order['店舗']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Order;
