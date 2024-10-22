function InboxForm(){
  return(
    <div>
      <h2>お知らせ送信画面</h2>
      <br />
      <br />
      <form action="http://localhost:4000/register/inbox" method="post" className="inbox">
        <div className="inbox">
          <label>
            通知の種類:
            <select name="topic" id="topic" defaultValue="information">
              <option value="shop">新店舗</option>
              <option value="product">新商品</option>
              <option value="information">新情報</option>
            </select>
          </label>
        </div>
        <div className="inbox">
          <label htmlFor="title">title: </label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="inbox">
          <label htmlFor="body">body: </label>
          <input type="text" name="body" id="body" required />
        </div>
        <div className="inbox">
          <label htmlFor="image">image-path: </label>
          <input type="text" name="image" id="image" required />
        </div>
        <div className="inbox">
          <input type="submit" value="送信" />
        </div>
      </form>
    </div>
  );
}
export default InboxForm;
