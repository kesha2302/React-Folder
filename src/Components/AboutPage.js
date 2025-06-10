import Footer from "./Footer"
import Navbar from "./Navbar"

function AboutPage() {
  return (
    <div>
      <Navbar/>

      <div className="container text-center mb-3">
      <h1 className='mt-3'>This is About Page</h1>

      <div className="card text-white bg-primary mb-3" style={{width:"70rem"}}>
  <div className="card-header">This is About Page</div>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

      <Footer/>
    </div>
  )
}

export default AboutPage
