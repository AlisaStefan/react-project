import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

interface ProductProps {
  product: {
    productId: string;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    starRating: number;
  };
}

function Product(props: ProductProps) {
  return (
    <tr>
      <td data-headers="Product"> {props.product.productName} </td>
      <td data-headers="Code"> {props.product.productCode} </td>
      <td data-headers="Available"> {props.product.releaseDate} </td>
      <td data-headers="Price"> ${props.product.price}</td>
      <td data-headers="5 Star Rating">
        <StarRating rating={props.product.starRating} />
      </td>
      <div className="icons">
        <Link to={`/products/edit/${props.product.productId}`}>
          <span className="table-icon-text">
            <FontAwesomeIcon icon={faPencilAlt} className="table-icon" />
            <span className="table-text"> Details </span>
          </span>
        </Link>
        <span className="table-icon-text">
          <FontAwesomeIcon icon={faTrash} className="table-icon" />
          <span className="table-text"> Delete </span>
        </span>
      </div>
    </tr>
  );
}

export default Product;
