import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface MenuItemProps {
  icon: IconProp;
  text: string;
  to: string;
}

function MenuItem(props: MenuItemProps) {
  return (
    <div>
      <li>
        <Link to={props.to} className="nav-link">
          <FontAwesomeIcon icon={props.icon} />
          <span className="menu-item"> {props.text} </span>
        </Link>
      </li>
    </div>
  );
}

export default MenuItem;
