import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate()
  const handleInboxFormView = () => {
    navigate('/register')
  }
  const handleNotificationFormView = () => {
    navigate('/notification')
  }
  const handleIndividualFormView = () => {
    navigate('/individual')
  }
  return (
    <>
      <button onClick={handleInboxFormView}>DB更新画面へ</button>
      <br />
      <button onClick={handleNotificationFormView}>全体通知送信画面へ</button>
      <br />
      <button onClick={handleIndividualFormView}>個人通知送信画面へ</button>
    </>
  )
}
export default Home;
