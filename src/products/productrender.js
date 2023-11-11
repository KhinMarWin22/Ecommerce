import { baseUrl, cardList } from "../selector";
import { createProduct } from "./createproduct";
import { notFound } from "./searchproduct";


export const ProductRender =(productsrender)=>{
 
  cardList.innerHTML='';
  if(productsrender.length == 0){
    cardList.append(notFound())
  }else{

      productsrender.forEach((el) =>
        cardList.append(createProduct(el))
        
      );
  }
     
   
  };
