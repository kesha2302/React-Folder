import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MultiCarousel() {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div>
      MultiCarousel

      <Carousel responsive={responsive}>
  <div>
    <div className="card text-white bg-primary mb-3" style={{width:"20rem"}}>
  <div className="card-header">Card1</div>
  <div className="card-body">
    <p className="card-text">This is Card1.</p>  
  </div>
</div>
</div>

  <div>
     <div className="card text-white bg-primary mb-3" style={{width:"20rem"}}>
  <div className="card-header">Card2</div>
  <div className="card-body">
    <p className="card-text">This is Card2.</p>  
  </div>
</div>
  </div>

  <div>
     <div className="card text-white bg-primary mb-3" style={{width:"20rem"}}>
  <div className="card-header">Card3</div>
  <div className="card-body">
    <p className="card-text">This is Card3.</p>  
  </div>
</div>
  </div>

  <div>
     <div className="card text-white bg-primary mb-3" style={{width:"20rem"}}>
  <div className="card-header">Card4</div>
  <div className="card-body">
    <p className="card-text">This is Card4.</p>  
  </div>
</div>
  </div>

  <div>
     <div className="card text-white bg-primary mb-3" style={{width:"20rem"}}>
  <div className="card-header">Card5</div>
  <div className="card-body">
    <p className="card-text">This is Card5.</p>  
  </div>
</div>
  </div>
</Carousel>;
    </div>
  )
}

export default MultiCarousel
