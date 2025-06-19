
function Product({product1}) {
  return (
    <div>
     {/* <h5>{product1.id}  {product1.name}  {product1.weight}  {product1.price}</h5> */}
      <div className="card text-white bg-primary mb-3" style={{width:"20rem"}}>
  <div className="card-header">{product1.name}</div>
  <div className="card-body">
    <p className="card-text">{product1.weight}</p>  
    <p className="card-text">{product1.price}</p>  
  </div>
</div>
    </div>
  )
}

export default Product
