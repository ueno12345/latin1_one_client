import { useNavigate } from 'react-router-dom';
import './register_form.css';

function RegisterForm() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="register-container">
      <h2>商品・店舗情報更新画面</h2>
      <form action="http://localhost:4000/register/data" method="post" className="register-form">
        <div className="form-group">
          <label htmlFor="category">
            登録・更新情報種類:
            <select name="category" id="category" className="form-control" defaultValue="shops">
              <option value="shops">店舗情報</option>
              <option value="products">商品情報</option>
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
          <label htmlFor="image">画像のパス:</label>
          <input type="text" name="image" id="image" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="submit" value="追加" className="submit-button" />
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

export default RegisterForm;
