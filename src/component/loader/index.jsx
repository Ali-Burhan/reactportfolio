import React from 'react'
import './loader.css'
import favicon from '../images/loadericon.png'
const Loader = () => {
  return (
    <div className="loaderMain">
        <div className="loader">
            <img src={favicon} className='img' height={150} alt="" />
            <div className='Line'>
            </div>
        </div>
    </div>
  )
}

export default Loader