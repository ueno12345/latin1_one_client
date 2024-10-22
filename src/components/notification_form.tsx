function NotificationForm(){
  return(
    <div>
    <h2>全体通知送信画面</h2>
    <br />
    <br />
      <form action="http://localhost:4000/notifications/whole" method="post" className="notification">
        <div className="notification">
          <label>
            通知の種類:
            <select name="topic" id="topic" defaultValue="information">
              <option value="shop">新店舗</option>
              <option value="product">新商品</option>
              <option value="information">新情報</option>
            </select>
          </label>
        </div>
        <div className="notification">
          <label htmlFor="title">title: </label>
          <input type="title" name="title" id="title" required />
        </div>
        <div className="notification">
          <label htmlFor="body">body: </label>
          <input type="body" name="body" id="body" required />
        </div>
        <div className="notification">
          <input type="submit" value="送信" />
        </div>
      </form>
    </div>
  );
}
export default NotificationForm;
