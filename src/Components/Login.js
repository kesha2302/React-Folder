
function Login() {
  return (
    <div>
      <h1 className="text-center m-4">Login</h1>
      <div class="card text-white bg-primary mb-3 mx-auto shadow-lg" style={{width: "50rem"}}>
       
        <div class="card-body m-3">
       
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Email:</label>
            <input type="text" class="form-control"  placeholder="Email"/>
        </div>

        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Password:</label>
            <input type="text" class="form-control"  placeholder="Password"/>
        </div>

        <div class="row ">
    <div class="col  justify-content-center mt-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col-3 mt-2">
      <a href="#!" style={{color:"blue"}} className="active">Forgot password?</a>
    </div>
  </div>

       
        <div class="col-12 text-center mt-5 mb-2">
            <button type="submit" class="btn btn-dark btn-lg px-3">Login in</button>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Login;
