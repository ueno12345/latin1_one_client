import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate()
  const handleNotificationFormView = () => {
    navigate('/notification')
  }
  const handleInboxFormView = () => {
    navigate('/inbox')
  }
  return (
    <>
      <button onClick={handleNotificationFormView}>通知送信画面へ</button>
      <br />
      <button onClick={handleInboxFormView}>DB更新画面へ</button>
    </>
  )
}
export default Home;
