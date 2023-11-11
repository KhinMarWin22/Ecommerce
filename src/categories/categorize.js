import { ProductRender } from "../products/productrender";
import { baseUrl } from "../selector";


export const categorize = (title,btn) => {
    
    document.querySelector(".category-item.active")?.classList.remove("active");
    btn.classList.add("active");
  
  
  if(title === "all"){
    fetch(`${baseUrl}/products`)
    .then(res => res.json())
    .then(products => ProductRender(products)) 
  }else{
    
    fetch(`${baseUrl}/products?category=${title}`)
    .then(res => res.json())
    .then(products => ProductRender(products)) 
  }
  
  

  };