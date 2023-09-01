import React,{useEffect,useState} from 'react'
import './project.css'
import {Helmet} from 'react-helmet'
import cv from '../images/myresume.pdf'
import ali from '../images/myskills.svg'
import react from '../images/logo512.png'
import sql from '../images/sql.jpg'
import net from '../images/net.png'
import ProgressBar from "@ramonak/react-progress-bar";
import Loader from '../loader'
const Project = () => {
    // const projectName = "Amazing Design Project";
    const projectDescription = "This is a description of my amazing design project.";
    const projectKeywords = "design, graphic design, portfolio, illustration, branding, website,reactjs portfolio, freelancer, hire, remote,about page,about page template";
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Simulate a delay to demonstrate the loader
      setTimeout(() => {
        setIsLoaded(true);
      }, 1200); // Simulated 2-second loading time, replace with your actual loading logic
    }, []);
  return (
    <>
    { 
    !isLoaded? <Loader/> :
    <div className="projectMain">
         <Helmet>
        <title>Burhan About</title>
        <meta name="description" content={projectDescription} />
        <meta name="keywords" content={projectKeywords} />
         </Helmet>
        <div className="upperBox">
          <h4>HELLO, I AM</h4>
          <h1>ALI</h1>
          <h1>BURHAN</h1>
          <p>I HAVE MORE THAN 2 YEARS OF EXPERIENCE</p>
          <button className="btn btn-outline-danger " style={{width:'100%'}}> <a style={{textDecoration:'none',color:'white',fontWeight:'bold'}} download={true} href={cv}> Download CV</a></button>
        </div>
        <div className="lowerBox">
            <div className="aboutme">
              <h3>Ali Burhan</h3>
              <span>Web Designer</span>
              <p>Hi There! I am Ali Burhan passionate Web and App Developer. I have worked on different Web Technologies. Below are some live examples of my projects and work</p>
             
              <div className='my-2'>
              <a className='projectlinks' target='_blank' href='https://adminpanel-6xtf.vercel.app/'>Admin panel UI</a>
              </div>
              
              <div className='my-2'>
              <a className='projectlinks' target='_blank' rel="noreferrer" href='https://code-burhan-n767.vercel.app/'>Vanilla HTML, CSS and JS Portfolio</a>
              </div>
              
              <div className='my-2'>
              <a className='projectlinks' target='_blank' onClick={()=>window.alert('In Progress')}>Accounting Solution</a>
              </div>
              
            </div>
            <div className="picme">
            <img src={ali} height={300} alt="" />
            </div>
            <div className="skillme">
              <div className="skill my-2">
                <span>Mern Stack <img src={react} height={30} alt="" /> </span>
         <ProgressBar completed={90} bgColor='#dc3545' />
              </div>
              <div className="skill my-2">
                <span>Microsoft SQL Server <img src={sql} height={30} alt="" /> </span>
         <ProgressBar completed={80} bgColor='#dc3545' />
              </div>
              <div className="skill my-2">
                <span>ASP.net Core (MVC) <img src={net} height={30} alt="" /> </span>
         <ProgressBar completed={75} bgColor='#dc3545' />
              </div>
              <div className="skill my-2">
                <span>React Native <img src={react} height={30} alt="" /> </span>
         <ProgressBar completed={70} bgColor='#dc3545' />
              </div>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default Project