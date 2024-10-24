import { useNavigate } from 'react-router-dom';
import './notification_form.css';

function NotificationForm() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <div className="notification-container">
      <h2>全体通知送信画面</h2>
      <form action="http://localhost:4000/notifications/whole" method="post" className="notification-form">
        <div className="form-group">
          <label htmlFor="topic">
            通知の種類:
            <select name="topic" id="topic" className="form-control" defaultValue="information">
              <option value="shop">新店舗</option>
              <option value="product">新商品</option>
              <option value="information">新情報</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="title">タイトル:</label>
          <input type="text" name="title" id="title" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="body">本文:</label>
          <input type="text" name="body" id="body" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="submit" value="送信" className="submit-button" />
        </div>
        <div className="form-group">
          <button type="button" className="home-button" onClick={navigateToHome}>
            ホームに戻る
          </button>
        </div>
      </form>
    </div>
  );
}

export default NotificationForm;
