import Footer from "./Footer"
import MultiCarousel from "./MultiCarousel";
import Navbar from "./Navbar"
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  return (
    <div>
      <Navbar/>
    
      <div className="mt-3"></div>

       <Carousel>
      <Carousel.Item>
       <img className="d-block w-100" src='Image/cake1.jpg' alt='Cake1' height="300"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src='Image/cake2.jpg' alt='Cake1' height="300"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className="d-block w-100" src='Image/cake3.jpg' alt='Cake1' height="300"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




  <h1 className="text-center">Special Cakes</h1>

<div class="container text-center">
  <div class="row">
    <div class="col">
     <div class="card" style={{width: "18rem;"}}>
  <img src="Image/cake3.jpg" height='100' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>


    <div class="col">
      <div class="card" style={{width: "18rem;"}}>
  <img src="Image/cake1.jpg"  height='100' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>

    <div class="col">
       <div class="card" style={{width: "18rem;"}}>
  <img src="Image/cake2.jpg"  height='100' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>


<MultiCarousel/>


      <Footer/>
    </div>
  )
}

export default HomePage
