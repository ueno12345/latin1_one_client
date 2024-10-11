function NotificationForm(){
  return(
    <form action="http://localhost:4000/" method="post" className="form-example">
      <div className="form-example">
        <label htmlFor="token">title: </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="form-example">
        <label htmlFor="title">title: </label>
        <input type="title" name="title" id="title" required />
      </div>
      <div className="form-example">
        <label htmlFor="body">body: </label>
        <input type="body" name="body" id="body" required />
      </div>
      <div className="form-example">
        <input type="submit" value="送信" />
      </div>
    </form>
  );
}
export default NotificationForm;
