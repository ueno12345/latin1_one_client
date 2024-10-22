function NotificationForm(){
  return(
    <form action="http://localhost:4000/notifications/whole" method="post" className="notification">
      <div className="notification">
        <label htmlFor="topic">topic: </label>
        <input type="text" name="topic" id="topic" required />
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
  );
}
export default NotificationForm;
