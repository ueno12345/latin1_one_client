function RegisterForm(){
  return(
    <div>
      <h2>商品・店舗情報更新画面</h2>
      <br />
      <br />
      <form action="http://localhost:4000/register/data" method="post" className="registerForm">
        <label>
        登録・更新情報種類:
          <select name="category" id="category" defaultValue="shops">
            <option value="shops">店舗情報</option>
            <option value="products">商品情報</option>
          </select>
        </label>
        <div className="registerForm">
          <label htmlFor="date">date: </label>
          <input type="text" name="date" id="date" required />
        </div>
        <div className="registerForm">
          <label htmlFor="title">title: </label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="registerForm">
          <label htmlFor="body">body: </label>
          <input type="text" name="body" id="body" required />
        </div>
        <div className="registerForm">
          <label htmlFor="image">image-path: </label>
          <input type="text" name="image" id="image" required />
        </div>
        <div className="registerForm">
          <input type="submit" value="追加" />
        </div>
      </form>
    </div>
  );
}
export default RegisterForm;
