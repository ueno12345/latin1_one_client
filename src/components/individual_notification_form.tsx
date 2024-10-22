function IndividualNotificationForm(){
  return(
    <form action="http://localhost:4000/notifications/individual" method="post" className="individual">
      <div className="individual">
        <label htmlFor="token">token: </label>
        <input type="text" name="token" id="token" required />
      </div>
      <div className="individual">
        <label htmlFor="title">title: </label>
        <input type="title" name="title" id="title" required />
      </div>
      <div className="individual">
        <label htmlFor="body">body: </label>
        <input type="body" name="body" id="body" required />
      </div>
      <div className="individual">
        <input type="submit" value="送信" />
      </div>
    </form>
  );
}
export default IndividualNotificationForm;
