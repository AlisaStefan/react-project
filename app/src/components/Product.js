import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function Product(props) {

    return (
    <tr>
        <td data-headers="Product"> {props.product.productName} </td>
        <td data-headers="Code"> {props.product.productCode} </td>
        <td data-headers="Available"> {props.product.releaseDate} </td>
        <td data-headers="Price"> {props.product.price}</td>
        <td data-headers="5 Star Rating"> {props.product.starRating} </td>
        <div className="icons">
        <span className="table-icon-text"> <FontAwesomeIcon icon={faPencilAlt} className="table-icon"/> <span className="table-text"> Details </span></span> 
        <span className="table-icon-text">  <FontAwesomeIcon icon={faTrash} className="table-icon"/> <span className="table-text"> Delete </span></span> 
        </div>    
     </tr> 
      
    );
  }
  
  export default Product;