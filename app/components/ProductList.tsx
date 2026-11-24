
import { cacheLife } from 'next/cache'

type Product={
    id:number,title:string,price:number
}

const ProductList=async()=>{

    "use cache"

    cacheLife({stale:5,revalidate:10,expire:60});

await new Promise((resolve)=>setTimeout(resolve,3000))
    const res=await fetch("https://dummyjson.com/products?limit=5")
    if(!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
    const data=await res.json()

    const products:Product[]=data.products
    


return (
    <>
    <p>Generated at {new Date().toLocaleTimeString()}</p>
    <ul>
        {products.map((product)=>{
            return <li key={product.id}>{product.title}  <span>{product.price}</span> </li>
        })}
    </ul>
        </>
)

}

export default ProductList