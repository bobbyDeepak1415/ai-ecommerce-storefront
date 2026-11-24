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
