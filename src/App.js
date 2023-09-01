import './App.css';
import Login from './component/login/login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './component/signup';
import Home from './component/home';
import 'aos/dist/aos.css';
import AOS from 'aos'
import { useEffect } from 'react';
import Sidebar from './component/sidebar';
import Contact from './component/contact';
import Projects from './component/project';
import Loader from './component/loader';
function App() {

  useEffect(()=>{
AOS.init()
  },[])
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>    
    <Route path='/contact' element={<Contact/>}/>    
    <Route path='/about' element={<Projects/>}/>  
    <Route path='/' element={<Home/>}/>    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
