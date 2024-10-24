import { useNavigate } from 'react-router-dom';
import './individual_notification_form.css';

function IndividualNotificationForm() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <div className="individual-container">
      <h2>個別通知送信画面</h2>
      <form action="http://localhost:4000/notifications/individual" method="post" className="individual-form">
        <div className="form-group">
          <label htmlFor="token">トークン:</label>
          <input type="text" name="token" id="token" className="form-control" required />
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

export default IndividualNotificationForm;
