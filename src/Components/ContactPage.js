import Footer from "./Footer"
import Navbar from "./Navbar"

function ContactPage() {
  return (
    <div>
      <Navbar/>

      <div className="container text-center mb-3">
      <h1 className="text-center">This is Contact Page</h1>


      <div class="card mb-3" style={{width:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="Image/wl1.jpg" class="img-fluid rounded-start" alt="..."
       />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      </div>

      <Footer/>
    </div>
  )
}

export default ContactPage
