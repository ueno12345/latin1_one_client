function Management(){
  return(
    <form action="http://localhost:4000/notifications/send" method="post" className="form-example">
      <div className="form-example">
        <label htmlFor="token">token: </label>
        <input type="text" name="token" id="token" required />
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
export default Management;
