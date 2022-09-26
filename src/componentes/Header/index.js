import React from 'react'
import Nike from "../../images/logo.jpeg";

export const Header = () => {
    return(
        
           
            <header>
              <h1></h1>  
             
             <a href='header'> 
             <div className='logo'>
             <img src={Nike} alt="logo" width={150}></img>   
             </div>
             </a>
              <ul>
                <li>
                <a href="#"> INICIO</a>
                </li>
                <li>
                <a href="#">PRODUCTOS</a>
                </li>
              </ul>
              <div className="cart">
              <box-icon name= "cart"></box-icon>
              <span className="item__total">0</span> 
              </div>


             </header>     
            
         
    )
}