
import { categorize } from "./categorize";



export const createCategory =(category)=>{
    const categoryBtn = document.createElement("button");
    categoryBtn.className ="bg-white me-3 category-item rounded px-3 py-1 border border-slate-400 hover:bg-green-600  hover:text-white active:-rotate-12 duration-100";
    categoryBtn.innerText =category;
    categoryBtn.addEventListener("click",()=>{
        
        categorize(category,categoryBtn)
    })

 return categoryBtn;
}