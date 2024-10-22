function RegisterForm(){
  return(
    <form action="http://localhost:4000/register/data" method="post" className="registerForm">
      <div className="registerForm">
        <label htmlFor="date">date: </label>
        <input type="text" name="date" id="date" required />
      </div>
      <div className="registerForm">
        <label htmlFor="title">title: </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="registerForm">
        <label htmlFor="description">body: </label>
        <input type="text" name="description" id="description" required />
      </div>
      <div className="registerForm">
        <label htmlFor="image">image-path: </label>
        <input type="text" name="image" id="image" required />
      </div>
      <div className="registerForm">
        <input type="submit" value="追加" />
      </div>
    </form>
  );
}
export default RegisterForm;
