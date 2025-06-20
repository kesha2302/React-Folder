import { useState,useEffect } from "react"
import axios from "axios"

function DataFetching() {
    const [post,setPost]= useState([])
    const[id,setId] = useState();

    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/comments')
         axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)

        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[id])
  return (
    <div>
      DataFetching

      {/* <ul>
        {post.map(post=>(<li key={post.id}>{post.name}
            {post.email}
        </li>))}
      </ul> */}

      <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
      <h2>{post.name}</h2>
    </div>
  )
}

export default DataFetching
