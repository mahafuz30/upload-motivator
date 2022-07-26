import React from 'react'

export default function FormHeader({text}) {
  return (
    <div>
        <h1 style={{fontSize:20}}>{text}</h1>
        <div style={{backgroundColor:'#808080', width:"100%",height:"1px"}} ></div>
    </div>
  )
}
