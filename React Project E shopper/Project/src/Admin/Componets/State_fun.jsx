import React, { useState } from 'react'

function State_fun() {

    const[data,setData]=useState({
        name:'ayaan',
        id:1
    })
  return (
    <div className='container mt-5'>
        <button onClick={()=>setData({...data,name:'waley'})}className='btn btn-primary'>chnage</button>
        <h1>{data.name}</h1>
        <hr/>
    </div>
    
  )
}

export default State_fun