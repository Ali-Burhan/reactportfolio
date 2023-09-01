import React, {useEffect, useState } from 'react'
import Sidebar from '../sidebar'
import './contact.css'
import {Helmet} from 'react-helmet'
import Loader from '../loader/index'
const Contact = () => {
  const projectDescription = "This is a description of my amazing design project.";
  const projectKeywords = "design, graphic design, portfolio, illustration, branding, website,reactjs portfolio, freelancer, hire, remote,home page,simple home page template,portfolio home page design,contact me,contact page,portfolio contact page design";
  const [toggle,setToggle] = useState(false)
  const [toast,setToast] = useState(false)
  const [contactMessage,setContactMessage] = useState(false)
  const [sentMessageToast,setSentMessageToast] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false);
  const  [formData,setFormData] = useState({name:'',email:'',message:'',subject:''})
  const handleonchange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    console.log(formData);
  }
  useEffect(() => {
    // Simulate a delay to demonstrate the loader
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Simulated 2-second loading time, replace with your actual loading logic
  }, []);

  useEffect(()=>{
    setInterval(() => {
      setSentMessageToast(false)
    }, 3000);
  },[sentMessageToast])

    const messageFromUser = () => {
        if(contactMessage===true){
            setToast(true)
        }else{
            if(!formData.name || !formData.message)
            {
              alert('Please Provide Name and Message')
            }
            else{
              if(formData.message.length <=5)
              {
                  alert('Message Should Be Long')
              }else{
                setContactMessage(true)
                setSentMessageToast(true)
                setFormData({name:'',email:'',message:'',subject:''});
              }
            }
        }
    }
  const toggleSide = () => {
    setToggle(!toggle)
  }
  
  return (
    <>
    <div className={ toggle? "homeMain2": "homeMain"}>
       <Helmet>
        <title>Contact Me!</title>
        <meta name="description" content={projectDescription} />
        <meta name="keywords" content={projectKeywords} />
         </Helmet>
        <div className="sideBar" >
        <Sidebar toggle={toggle}/>
      {
        !toggle?
      <div className='icon' onClick={toggleSide}>
      <svg width="30" height="30" class="mx-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M19.505 4.975a.6.6 0 0 1 0 .85l-13.2 13.2a.6.6 0 0 1-.85-.85l13.2-13.2a.598.598 0 0 1 .85 0Z" clip-rule="evenodd"></path>
  <path fill-rule="evenodd" d="M5.456 4.975a.6.6 0 0 0 0 .85l13.2 13.2a.6.6 0 1 0 .85-.85l-13.2-13.2a.6.6 0 0 0-.85 0Z" clip-rule="evenodd"></path>
</svg>
      </div>:
        <div className='icon' onClick={toggleSide}>
        <svg width="30" height="30" class="mx-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.92 17.28a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.6.6 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Z" clip-rule="evenodd"></path>
</svg>
      </div>
      }
        </div>
        { !isLoaded? <Loader/> :
        <div className="contactMain">
            <div className="imageSide">
                
                <div>
      </div></div>
            <div className="formSide">
                <div className="heading text-danger">
                { toast && <p className='toaster'>Thank you! You have already sent a message <span className='toasterchild' onClick={()=>setToast(false)}>❌</span> </p>}    
                { sentMessageToast && <p className='toaster'>Message Sent Successfully <span className='toasterchild' onClick={()=>setSentMessageToast(false)}>❌</span> </p>}    
                <h3>Talk With Me!</h3></div>
                <div className="para"><i> <span style={{fontWeight:'bolder',fontSize:'20px'}}>"</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, quia reprehenderit saepe voluptatibus ab atque et praesentium autem alias impedit. <span style={{fontWeight:'bolder',fontSize:'20px'}}>"</span></i></div>
                <div className="forms">
                <div className="inputs">
                    <span className='inputLabel'>Name*</span>
                <input className='contInput' name='name' value={formData.name} onChange={handleonchange} style={{width:'100%'}} type="text" />
                </div>
                
                <div className="inputs">
                    <span className='inputLabel'>Email</span>
                <input className='contInput' name='email' value={formData.email} onChange={handleonchange} style={{width:'100%'}} type="text" />
                </div>
                
                <div className="inputs">
                    <span className='inputLabel'>Message*</span>
                <input className='contInput' name='message' value={formData.message} onChange={handleonchange} style={{width:'100%'}} type="text" />
                </div>
                
                <div className="inputs">
                    <span className='inputLabel'>Subject</span>
                <input className='contInput' name='subject' value={formData.subject} onChange={handleonchange} style={{width:'100%'}} type="text" />
                </div>
                
                <button className='btn btn-outline-danger my-3' style={{width:'100%'}} onClick={messageFromUser}>Send</button></div>
                <div className="socialicons">
                    

               <a style={{color:'black'}} href="https://www.facebook.com/ali.burhan.1829405" target='_blank'>
                 <svg width="40" height="40" class="mx-2 svgIcon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.08 12.539c0-5.335-4.298-9.66-9.6-9.66-5.304.001-9.602 4.325-9.602 9.661 0 4.82 3.511 8.817 8.1 9.541v-6.75H8.542v-2.79h2.438v-2.13c0-2.421 1.434-3.758 3.627-3.758 1.05 0 2.149.188 2.149.188v2.376h-1.21c-1.192 0-1.564.745-1.564 1.51v1.812h2.661l-.425 2.791H13.98v6.75c4.59-.725 8.1-4.72 8.1-9.541Z"></path>
</svg>
                </a>
               <a style={{color:'black'}} href="">
<svg width="40" height="40" class="mx-2 svgIcon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
</svg>
                </a>     

                <a href="" style={{color:'black'}}>

<svg width="40" height="40" class="mx-2 svgIcon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
</svg>
                </a>
                <a href="" style={{color:'black'}}>

<svg width="40" height="40" class="mx-2 svgIcon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z"></path>
</svg>
                </a>
                <a href="https://github.com/Ali-Burhan" style={{color:'black'}} target='_blank'>

<svg width="40" height="40" class="mx-2 svgIcon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
</svg>
                </a>
                </div>
            </div>
        </div>
        }
    </div>
    </>
  )
}

export default Contact