import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate()
  const handleRegisterFormView = () => {
    navigate('/register')
  }
  const handleInboxFormView = () => {
    navigate('/inbox')
  }
  const handleNotificationFormView = () => {
    navigate('/notification')
  }
  const handleIndividualFormView = () => {
    navigate('/individual')
  }
  return (
    <>
      <button onClick={handleRegisterFormView}>商品・店舗情報更新画面へ</button>
      <br />
      <button onClick={handleInboxFormView}>お知らせ送信画面へ</button>
      <br />
      <button onClick={handleNotificationFormView}>全体通知送信画面へ</button>
      <br />
      <button onClick={handleIndividualFormView}>個人通知送信画面へ</button>
    </>
  )
}
export default Home;
