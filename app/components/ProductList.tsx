
'use client'

import { useState } from "react"

type Product={
    id:number,title:string,price:number
}

const ProductList=async()=>{

    const [products,setProducts]=useState([])

    const res=await fetch("https://dummyjson.com/products?limit=5")
    const response=await res.json()

    

    setProducts(response.products)

return (
    <ul>
        {products.map((product)=>{
            return <li key={product.id}><{product.title}  <span>{product.price}</span> </li>
        })}
    </ul>
)

}