import { useState } from "react";
import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  return (
    <div className="l-navbar">
      <FontAwesomeIcon
        icon={faBars}
        onClick={showSidebar}
        className={sidebar ? "menu-bars active" : "menu-bars"}
      />

      <nav className={sidebar ? "box-1 active" : "box-1"}>
        <ul className="nav-menu-items">
          <MenuItem icon={faUser} text="Users" to="/" />
          <MenuItem icon={faShoppingCart} text="Buy" to="/products" />
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
