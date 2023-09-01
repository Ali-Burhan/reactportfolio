import React from 'react'
import './sidebar.css'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
const Sidebar = ({toggle}) => {
  return (
    <div className="SidebarMain">
        <div className="Logo">
            <img src={logo} className='sideLogo' alt="" />
            <p style={{fontWeight:'bold',fontSize:'15px',display:toggle?'none':''}}>ALI BURHAN</p>
        </div>
        <div className="menuItems">
        <Link style={{textDecoration:'none'}} className='text-white' to={'/'}><div className={"item"}><svg className='mx-2' width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.32 18.12v-7.8h1.2v7.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6v-7.8h1.2v7.8a1.8 1.8 0 0 1-1.8 1.8H6.12a1.8 1.8 0 0 1-1.8-1.8Zm13.2-13.2v4.2l-2.4-2.4v-1.8a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6Z" clip-rule="evenodd"></path>
  <path fill-rule="evenodd" d="M10.672 3.72a1.2 1.2 0 0 1 1.697 0l7.976 7.976a.6.6 0 1 1-.85.85L11.52 4.568l-7.975 7.976a.6.6 0 1 1-.85-.85l7.977-7.975Z" clip-rule="evenodd"></path>
</svg> <span className={toggle && "item2"}> Home </span></div></Link>
<Link style={{textDecoration:'none'}} className='text-white' to={'/about'}> <div className="item"><svg width="30" height="30" className="mx-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.8 2.4H7.2a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4h9.6a2.4 2.4 0 0 0 2.4-2.4V4.8a2.4 2.4 0 0 0-2.4-2.4Zm-1.2 8.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM12 15.6c3.147 0 4.975.992 6 2.106V19.2a1.2 1.2 0 0 1-1.2 1.2H7.2A1.2 1.2 0 0 1 6 19.2v-1.494C7.025 16.59 8.852 15.6 12 15.6Z"></path>
</svg><span className={toggle && "item2"}>About</span></div></Link>
<Link style={{textDecoration:'none'}} className='text-white' to={'/contact'}> <div className="item"><svg width="30" height="30" class="mx-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 13.62a3 3 0 1 0 0-5.999 3 3 0 0 0 0 6Z"></path>
  <path d="M3.6 3.96a1.2 1.2 0 0 0-1.2 1.2v13.2a1.2 1.2 0 0 0 1.2 1.2h.6a.6.6 0 0 0 .6-.6.6.6 0 1 1 1.2 0 .6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6.6.6 0 1 1 1.2 0 .6.6 0 0 0 .6.6h.6a1.2 1.2 0 0 0 1.2-1.2v-12a1.2 1.2 0 0 0-1.2-1.2h-9.95l-.85-.848a1.2 1.2 0 0 0-.848-.352H3.6Zm0 1.2h5.152l.848.848a1.2 1.2 0 0 0 .849.352H20.4v12h-.102a1.8 1.8 0 0 0-2.88-.756c-.756-1.377-2.353-2.844-5.418-2.844-3.066 0-4.663 1.469-5.416 2.844a1.801 1.801 0 0 0-2.88.756H3.6V5.16Z"></path>
</svg><span className={toggle && "item2"}>Contact</span></div></Link>
<Link style={{textDecoration:'none'}} className='text-white' to={'/login'}> <div className="item"><svg width="30" height="30" class="mx-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.76 6.6a.6.6 0 0 1 .6-.6h9.6a.6.6 0 0 1 .6.6v10.8a.6.6 0 0 1-.6.6h-9.6a.6.6 0 0 1-.6-.6V15a.6.6 0 1 0-1.2 0v2.4a1.8 1.8 0 0 0 1.8 1.8h9.6a1.8 1.8 0 0 0 1.8-1.8V6.6a1.8 1.8 0 0 0-1.8-1.8h-9.6a1.8 1.8 0 0 0-1.8 1.8V9a.6.6 0 0 0 1.2 0V6.6Z" clip-rule="evenodd"></path>
  <path fill-rule="evenodd" d="M15.785 12.424a.6.6 0 0 0 0-.85l-3.6-3.6a.602.602 0 0 0-.85.85l2.576 2.576H3.36a.6.6 0 1 0 0 1.2h10.55l-2.576 2.575a.6.6 0 1 0 .85.85l3.6-3.6Z" clip-rule="evenodd"></path>
</svg> <span className={toggle && "item2"}> Login</span><span className={(toggle && "item2") || "egText"}>(EG)</span></div> </Link>
<Link style={{textDecoration:'none'}} className='text-white' to={'/signup'}>  <div className="item"><svg width="30" height="30" class="mx-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.608 11.546c0-3.56-2.7-6.038-6.579-6.038-4.02 0-6.775 2.781-6.775 6.842 0 4.192 2.682 6.85 6.914 6.85 1.035 0 2.027-.148 2.765-.402v-1.035c-.516.24-1.625.394-2.748.394-3.511 0-5.775-2.256-5.775-5.758 0-3.412 2.305-5.857 5.512-5.857 3.282 0 5.53 2.026 5.53 4.987 0 2.019-.665 3.323-1.7 3.323-.59 0-.926-.336-.926-.912V9.127h-1.238v1h-.132c-.32-.713-1.057-1.156-1.92-1.156-1.68 0-2.854 1.394-2.854 3.388 0 2.084 1.149 3.487 2.855 3.487.96 0 1.698-.468 2.051-1.305h.132c.097.804.843 1.378 1.803 1.378 1.887 0 3.085-1.698 3.085-4.372Zm-8.613.845c0-1.436.648-2.288 1.747-2.288 1.116 0 1.83.885 1.83 2.288 0 1.403-.722 2.297-1.846 2.297-1.075 0-1.73-.87-1.73-2.297Z"></path>
</svg> <span className={toggle && "item2"}>Sign Up</span><span className={(toggle && "item2") || "egText"}>(EG)</span></div> </Link>
        </div>
        <div className={ toggle? "footer2": "footer"} style={{fontWeight:'bold'}}>
            Made By ❤ Ali Burhan
        </div>
    </div>
  )
}

export default Sidebar