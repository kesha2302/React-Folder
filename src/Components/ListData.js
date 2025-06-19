import Product from "./Product"

function ListData() {
    const products=[
        {
            id:1,
            name:'Parle-G',
            weight:'100 GM',
            price:'10 Rs.'
        },
        {
            id:2,
            name:'Meggi',
            weight:'400GM',
            price:'67 Rs.',
        },
        {
            id:3,
            name:'Frooti',
            weight:'-',
            price:'20',
        },

        {
            id:4,
            name:'Cookies',
            weight:'200GM',
            price:'50',
        }

    ]

    //  const productList =  products.map(product => <h5>{product.id}  {product.name}  {product.weight}  {product.price}</h5>)
    const productList = products.map(product=><Product key={product.id} product1= {product}/>)
        return (
    <div>
      {productList}
    </div>
  )
}

export default ListData
