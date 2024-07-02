import { useState } from 'react'
import './App.css'
import Cards from './Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards image="https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg" title="Rahul" description="this is props" />
      <hr/>
      <Cards image="https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg" title="Rahul" description="this is props" />
      <hr/>
      <Cards image="https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg" title="Rahul" description="this is props" />
      <hr/>
      <Cards image="https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg" title="Rahul" description="this is props" />
      <hr/>
    </>
  )
}

export default App
