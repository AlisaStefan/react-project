import React, { useEffect,useState } from "react";
//import {axios} from 'axios';
import Product from './Product';
const axios=require('axios');


function ProductList(){

    const [products,setProducts]=useState([]);

  function getProducts(){
       axios.get('http://localhost:3333/products')
            .then(respone =>{
                setProducts(respone.data);
            })
            .catch(error=>console.log("error"));
   }

   useEffect(()=>{

       getProducts();
       
   },[]);

  function productList(){
       return products.map((currentProduct,i)=>{
           return <Product product={currentProduct} key={i}/>
       });
   }



    return(
         <div>
             <table className="table">
                 <thead>
                     <tr>
                         <th> Product </th>
                         <th> Code </th>
                         <th> Available </th>
                         <th> Price </th>
                         <th> 5 Star Rating </th>
                     </tr>
                 </thead>

                 <tbody>
                     {productList()}
                 </tbody>
             </table>
        </div>
    );

}

export default ProductList;