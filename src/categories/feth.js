import { ProductRender } from "../products/productrender";
import { baseUrl, cardList, categoryList } from "../selector";

import { createCategory } from "./createcategory";

export const Fectdata = async()=>{
    const CatRes = await fetch(baseUrl + "/categories");
const categories = await CatRes.json();
categoryList.innerHTML ="";
 
categories.forEach((category) =>{

  categoryList.append(createCategory(category));

categoryList.children[0].classList.add("active");

});

const ProductRes = await fetch(baseUrl +"/products");
  const products = await ProductRes.json();
  cardList.innerHTML ='';
   ProductRender(products);

}