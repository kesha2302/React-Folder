function Signup() {
  
    return (
      <div>
        <h1 className="text-center p-3 m-4">Sign-Up</h1>
  
        <div class="card text-white bg-primary mb-3 mx-auto shadow-lg" style={{width: "50rem"}}>
         
          <div class="card-body m-3">
            <form>
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Full Name:</label>
              <input type="text" class="form-control"  placeholder="Full Name"/>
          </div>
  
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Username:</label>
              <input type="text" class="form-control"  placeholder="Username"/>

          </div>
  
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Email:</label>
              <input type="text" class="form-control"  placeholder="Email"/>

          </div>
  
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Password:</label>
              <input type="text" class="form-control"  placeholder="Password"/>
              </div>
  
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Address:</label>
              <textarea class="form-control"  placeholder="Address"></textarea>
          </div>
  
          <div className="row">
          <div class="col-md-6">
              <label for="inputCity" class="form-label">City:</label>
              <input type="text" class="form-control" id="inputCity" placeholder="City"/>

          </div>
         
          <div class="col-md-2">
              <label for="inputZip" class="form-label">Pincode:</label>
              <input type="text" class="form-control" id="inputZip" placeholder="Pincode"/>
              </div>

          </div>
  
          <div class="col-12 text-center mt-5 mb-2">
              <button type="submit" class="btn btn-dark btn-lg px-3">Sign in</button>
          </div>
          </form>
          </div>
        </div>
  
      </div>
    )
  }
  
  export default Signup