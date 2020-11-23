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
        <span> <FontAwesomeIcon icon={faPencilAlt}/>  Details</span> 
        <span>  <FontAwesomeIcon icon={faTrash}/>   Delete</span>     
     </tr> 
      
    );
  }
  
  export default Product;