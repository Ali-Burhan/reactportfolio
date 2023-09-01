import React, { useEffect, useState } from 'react'
import ali from '../images/Ali.jpg'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Loader from '../loader'
const Home2 = () => {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const fullText = "Designer";
    const fullText2 = "<Programmer/>";
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Simulate a delay to demonstrate the loader
      setTimeout(() => {
        setIsLoaded(true);
      }, 500); // Simulated 2-second loading time, replace with your actual loading logic
    }, []);
      // const projectName = "Amazing Design Project";
      const projectDescription = "This is a description of my amazing design project.";
      const projectKeywords = "design, graphic design, portfolio, illustration, branding, website,reactjs portfolio, freelancer, hire, remote,home page,simple home page template,portfolio home page design";
    
    useEffect(() => {
      let currentIndex = 0;
      let currentIndex2 = 0;
      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setText2(fullText2.slice(0, currentIndex + 1));
        currentIndex++;
        currentIndex2++;
  
        if (currentIndex2 === fullText2.length) {
          clearInterval(typingInterval);
        }
      }, 60); // Adjust the interval to control typing speed
  
      return () => {
        clearInterval(typingInterval);
      };
    }, []);
  return (
    <>
    { !isLoaded ?(
      <Loader/>
      ):
      <div className="mainDash">
       <Helmet>
        <title>Home</title>
        <meta name="description" content={projectDescription} />
        <meta name="keywords" content={projectKeywords} />
         </Helmet>
        
         <>
           <div className="leftSide">
          <h3>{text}</h3>
          <p>UI/UX product designer specialising in UI design and <span style={{fontWeight:'bold'}} className='text-danger'>design system</span></p>
        <Link style={{textDecoration:'none'}} to={"/about"}><button className="btn btn-outline-danger" style={{width:'100%'}}>Download Resume</button></Link> 
        </div>
          <div className="midSide">
            <img data-aos='fade-out' className='image-fluid homePic' src={ali} width={350} style={{borderRadius:'20px'}} alt="" />
          </div>
        <div className="rightSide">
          <h3>{text2}</h3>
          <p><span className='text-danger' style={{fontWeight:'bold'}}>Full Stack</span> developer who writes clean, elegant and efficient code.</p>
        </div>
         </>
         </div>
        }
      </>
  )
}

export default Home2