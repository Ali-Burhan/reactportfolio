import React,{useEffect,useState} from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Loader from '../loader'
const Signup = () => {
  const projectDescription = "This is a description of my amazing design project.";
  const projectKeywords = "design, graphic design, portfolio, illustration, branding, website,reactjs portfolio, freelancer, hire, remote,Signup Page,Signup example page,portfolio designs";
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay to demonstrate the loader
    setTimeout(() => {
      setIsLoaded(true);
    }, 1200); // Simulated 2-second loading time, replace with your actual loading logic
  }, []);
  return (<>
  { !isLoaded ? <Loader/> :
    <div className="signMain">
       <Helmet>
        <title>Example Signup!</title>
        <meta name="description" content={projectDescription} />
        <meta name="keywords" content={projectKeywords} />
         </Helmet>
        <div data-aos='fade-right' className="contentDiv">
            <div className="imgandpara">
              <h3 className="heading">BURHAN DESIGNER</h3>
              <p className="para">
                <h4>Al<span className='text-warning'>i</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam excepturi, perferendis porro mollitia hic qui quasi rerum officiis assumenda distinctio iure sapiente voluptatibus, repudiandae ipsam commodi, nostrum nemo ipsa?</p>
              </p>
              <p className="footer">
                Copyright © 2023 All Rights Reserved | Design by Ali
              </p>
            </div>
            <div className="formDiv">
                <div className="formContent">
                    <div className="headForm">
                        <h3>Sign up for Ali. It's free</h3>
                        <button className="btn btn-danger d-flex" style={{width:'100%',fontWeight:'bold'}}><svg className='mx-3 svgGoogle' width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.431 10.197c.117.671.175 1.352.174 2.033 0 3.042-1.088 5.615-2.98 7.356h.003C16.973 21.115 14.698 22 12 22a10 10 0 1 1 0-20 9.611 9.611 0 0 1 6.69 2.602l-2.855 2.855A5.434 5.434 0 0 0 12 5.957c-2.609 0-4.825 1.76-5.615 4.13a5.99 5.99 0 0 0 0 3.829h.004c.793 2.366 3.006 4.126 5.615 4.126 1.347 0 2.505-.345 3.402-.955h-.004a4.628 4.628 0 0 0 2-3.038H12v-3.85h9.431v-.002Z"></path>
</svg>Continue with google</button>
                    </div>
<hr />
                    <div className="footForm">
                        <h6>Sign up with Email</h6>
                        <p>Already have an account? <span className='text-primary' style={{fontWeight:'bold'}}> <Link style={{textDecoration:'none'}} className='text-danger' to={'/login'}> Sign in</Link></span></p>
                        <div className='inputStyle'>
                        <p className='d-block lables'>Email</p>
                        <input type="email" className='signInput' style={{width:'100%'}} name='email' />
                        </div>
                      
                        <div className='inputStyle my-4'>
                        <p className='d-block lables'>Password</p>
                        <input type="password" className='signInput' style={{width:'100%'}} name='email' />
                        </div>
                      
                        <div className='inputStyle'>
                        <p className='d-block lables'>Confirm Password</p>
                        <input type="password" className='signInput' style={{width:'100%'}} name='email' />
                        </div>
                      
                        <button className="btn btn-danger my-2" style={{width:'100%'}}>Submit</button>
                        <p className='footertext'>By submitting your information your agree to Ali's term of services and Privacy Policy. Your can opt out anytime</p>
                        <p className='text-center'>Made With ❤ By <span className='text-danger' style={{fontWeight:'bold'}}>Ali Burhan</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
    </>
  )
}

export default Signup