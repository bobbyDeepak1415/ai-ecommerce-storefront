


type Product={
    id:number,title:string,price:number
}

const ProductList=async()=>{


    const res=await fetch("https://dummyjson.com/products?limit=5")
    // if(!res.ok) throw new Error(`$failed to fetch: ${res.status}`)
    if(!res.ok) throw new Error(`res.status`)
    const data=await res.json()

    const products:Product[]=data.products
    


return (
    <ul>
        {products.map((product)=>{
            return <li key={product.id}>{product.title}  <span>{product.price}</span> </li>
        })}
    </ul>
)

}

export default ProductList