import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


function Menu() {

    return (
      <div>
      <FontAwesomeIcon icon={faBars}/>

      <nav>
             <ul>
                 <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faUser} /> <span> Users </span> 
                    </Link>
                 </li>
         
                <li>
                    <Link to="/products">
                       <FontAwesomeIcon icon={faShoppingCart} /> <span> Buy</span> 
                     </Link>
                </li>

             </ul>
          </nav>

       
      </div>
    );
  }
  
  export default Menu;
  