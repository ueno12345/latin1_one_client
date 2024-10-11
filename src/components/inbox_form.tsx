function InboxForm(){
  return(
    <form action="http://localhost:4000/inbox/send" method="post" className="inboxForm">
      <div className="inboxForm">
        <label htmlFor="date">date: </label>
        <input type="text" name="date" id="date" required />
      </div>
      <div className="inboxForm">
        <label htmlFor="title">title: </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="inboxForm">
        <label htmlFor="description">body: </label>
        <input type="text" name="description" id="description" required />
      </div>
      <div className="inboxForm">
        <label htmlFor="image">image-path: </label>
        <input type="text" name="image" id="image" required />
      </div>
      <div className="inboxForm">
        <input type="submit" value="送信" />
      </div>
    </form>
  );
}
export default InboxForm;
