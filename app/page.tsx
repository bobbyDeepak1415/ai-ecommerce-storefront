import { Suspense } from "react";
import ProductList from "./components/ProductList";

function Home() {
// console.log("home rendered",typeof window)


  return (
    <main>
      <h1>Ai-Store Front</h1>
      <p>Smart shopping for smart owners. Powered By AI</p>
      <Suspense fallback={<p>Loading products...</p>}>

      <ProductList/>
      </Suspense>
    </main>
  );
}

export default Home


