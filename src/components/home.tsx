import { useNavigate } from "react-router-dom";
import './home.css';

function Home() {
  const navigate = useNavigate();

  const handleRegisterFormView = () => {
    navigate('/register');
  };
  const handleInboxFormView = () => {
    navigate('/inbox');
  };
  const handleNotificationFormView = () => {
    navigate('/notification');
  };
  const handleIndividualFormView = () => {
    navigate('/individual');
  };
  const handleExcelView = () => {
    navigate('/excel');
  };

  return (
    <div className="home-container">
      <h2>ホーム画面</h2>
      <button className="homepage-button" onClick={handleRegisterFormView}>
        商品・店舗情報更新画面へ
      </button>
      <button className="homepage-button" onClick={handleInboxFormView}>
        お知らせ送信画面へ
      </button>
      <button className="homepage-button" onClick={handleNotificationFormView}>
        全体通知送信画面へ
      </button>
      <button className="homepage-button" onClick={handleIndividualFormView}>
        個人通知送信画面へ
      </button>
      <button className="homepage-button" onClick={handleExcelView}>
        excel画面へ
      </button>
    </div>
  );
}

export default Home;
