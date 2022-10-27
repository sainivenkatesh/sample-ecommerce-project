import React from 'react'
import Img from'./../assets/img2.jpg'
import Products from './Products'

function Home() {
  return (
    <div className='hero'>
      <div className="card text-bg-dark text-white border-0">
        <img src={Img}  className="card-img" alt="Background" height='650px' />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className='container'>
        <h5 className="card-title display-5 fw-bolder mb-o">NEW SEASON ARRIVALS</h5>
         <p className="card-text  fs-2">Check Out All the Trends</p>
         </div>
  </div>
</div>
<Products />
    </div>
    
  )
}

export default Home
