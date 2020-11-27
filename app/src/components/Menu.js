import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Menu() {

  const [sidebar,SetSidebar]=useState(false);

  const showSidebar= ()=>{
    SetSidebar(!sidebar);
    console.log(sidebar);
  }


    return (
      <div className="l-navbar">
      <FontAwesomeIcon icon={faBars} onClick={showSidebar} className={sidebar ? "menu-bars active" : "menu-bars"}/>

      <nav className={sidebar ? "box-1 active": "box-1"}>
             <ul className="nav-menu-items">
                 <li>
                      <Link to="/" className="nav-link">
                        <FontAwesomeIcon icon={faUser} /> <span className="menu-item"> Users </span> 
                    </Link>
                 </li>
         
                <li>
                    <Link to="/products" className="nav-link nav-buy">
                       <FontAwesomeIcon icon={faShoppingCart} /> <span className="menu-item"> Buy</span> 
                     </Link>
                </li>

             </ul>
          </nav>

       
      </div>
    );
  }
  
  export default Menu;
  