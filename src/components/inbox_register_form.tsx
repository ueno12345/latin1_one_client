import { useNavigate } from 'react-router-dom';
import './inbox_register_form.css';

function InboxForm() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <div className="inbox-container">
      <h2>お知らせ送信画面</h2>
      <form action="http://localhost:4000/register/inbox" method="post" className="inbox-form">
        <div className="form-group">
          <label htmlFor="topic">通知の種類:</label>
          <select name="topic" id="topic" defaultValue="information" className="form-control">
            <option value="shop">新店舗</option>
            <option value="product">新商品</option>
            <option value="information">新情報</option>
          </select>
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
          <label htmlFor="image">画像のパス:</label>
          <input type="text" name="image" id="image" className="form-control" required />
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

export default InboxForm;
