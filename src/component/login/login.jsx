import React,{useEffect,useState} from 'react'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import input1 from '../images/envelope.svg'
import input2 from '../images/lock.svg'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Loader from '../loader'
const Login = () => {
  const projectDescription = "This is a description of my amazing design project.";
  const projectKeywords = "design, graphic design, portfolio, illustration, branding, website,reactjs portfolio, freelancer, hire, remote,Login page example,simple login page ui,login page design";
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay to demonstrate the loader
    setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Simulated 2-second loading time, replace with your actual loading logic
  }, []);
  return (
    <>
    { !isLoaded ? <Loader/> :
    <div className="loginMain">
      <Helmet>
        <title>Example Login</title>
        <meta name="description" content={projectDescription} />
        <meta name="keywords" content={projectKeywords} />
         </Helmet>
      <div className="imgDiv"></div>
      <div  className="formDiv">
        <div className="logo">
          <h1 data-aos='fade-up'><span className='text-danger'>A</span>li B<span className='text-danger'>u</span>rhan</h1>
        </div>
        <div className="form">
          <div className="inputDiv">
          <img src={input1}  className='inpSvg' alt="" />
          <input type="text" className='carat' placeholder='Email'/>
          </div>
          <div className="inputDiv my-4">
          <img src={input2}  className='inpSvg text-danger' alt="" />
          <input type="text" className='carat' placeholder='Password' />
          </div>
          <div className="inputDiv my-4">
            <div className='buttonDiv'>
            <button className='btn' style={{width:'100%'}}>Submit</button>
            </div>
          </div>
          <p data-aos='fade-right'  className='text-center'>Don't have an account? <span className='text-danger ' style={{fontWeight:'bold',cursor:'pointer'}}> <Link style={{textDecoration:'none'}} className='text-danger' to={'/signup'}> Create New</Link></span></p>
        </div>
        <div className="footer">
          <span className='text-center my-2' style={{fontWeight:'bold',cursor:'pointer'}}>Forget Password</span>
          <p>Made wih 💖 by <span className='text-danger' style={{fontWeight:'bold'}}>Ali Burhan</span></p>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default Login