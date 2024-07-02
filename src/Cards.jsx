import React from 'react'

const Cards = (props) => {
    console.log(props)
  return (
    <>
    <div>
        <img src={props.image} style={{height:"100px",width:"200px"}} alt='jks' />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
    </>
  )
}

export default Cards