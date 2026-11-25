import { Suspense } from "react"

async function ProductDetail({params}:{params:Promise<{id:string}>}){
    const {id}=await params
    return <h1>Product:{id}</h1>
}

export default function ProductPage({params}:PageProps<"/products/[id]">}){
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ProductDetail params={params}/>
        </Suspense>
    )
}