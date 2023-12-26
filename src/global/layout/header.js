import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'

const Header = () => {
  return (
     <div>
      <header>
     <div className="logo-img" id> 
       <img src={Logo} alt="" />
     </div>
     <nav>
       <ul>
         <li>
           Home   
         </li>
         <li>
           Services
         </li>
         <li>
           Contact Us
         </li>
         <li className="header-btn"><i className="fa-solid fa-phone" />
           +971522446652
         </li> 
       </ul>
     </nav>
   </header>
   </div>
  )
}

export default Header