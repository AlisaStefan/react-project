import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function Product(props) {
    return (
    <tr>
        <td> {props.product.productName} </td>
        <td> {props.product.productCode} </td>
        <td> {props.product.releaseDate} </td>
        <td> {props.product.price} </td>
        <td> {props.product.starRating} </td>
        <span className="table-icon-text"> <FontAwesomeIcon icon={faPencilAlt} className="table-icon"/>  Details</span> 
        <span className="table-icon-text">  <FontAwesomeIcon icon={faTrash} className="table-icon"/>   Delete</span>     
     </tr> 
      
    );
  }
  
  export default Product;