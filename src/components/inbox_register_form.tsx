function InboxForm(){
  return(
    <div>
      <h2>お知らせ送信画面</h2>
      <br />
      <br />
      <form action="http://localhost:4000/register/inbox" method="post" className="inbox">
        <div className="inbox">
          <label htmlFor="date">date: </label>
          <input type="text" name="date" id="date" required />
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
      </form>
    </div>
  );
}
export default InboxForm;
