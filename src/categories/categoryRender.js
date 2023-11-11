import { baseUrl, categoryList } from "../selector";
import { createCategory } from "./createcategory";

export const categoryRender =()=>{
    
        // 2 process
        fetch(baseUrl + "/categories")
        .then(res=> res.json())
        .then(categories =>{
            categories.forEach((category) =>
            
            categoryList.append(createCategory(category))
            
          );
          categoryList.children[0].classList.add("active");
        });
      
}