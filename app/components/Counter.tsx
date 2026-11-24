"use client"
import { useEffect, useState } from 'react'

const Counter = () => {

    const [where,setWhere]=useState("server")
    const [count,setCount]=useState(0)

    useEffect(()=>{
setWhere("browser")
    },[])
  
    
      return  <button type="button" onClick={()=>setCount(prev=>prev+1)}>Clicked {count} times {where}</button>
      

  
}

export default Counter
// In next js when a server component is rendered in the server side, the html document is then sent to the browser and then is rendered.then the js file is downloaded and then the event handlers are attached. this process is called hydration. after this if the values that are set by the setver are not matching with what the browser is rendering in the client side then an error is thrown