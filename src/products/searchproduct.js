import { baseUrl, cardList, clearbtn, search } from "../selector";
import { ProductRender } from "./productrender";

export const SearchporductItem = async(keyword) =>{

    const ProductRes = await fetch( baseUrl +'/products');
    const products = await ProductRes.json();
   
  
    ProductRender(products.filter(product =>{
      const reg = new RegExp(keyword,"i");
  
      return product.title.search(reg) != -1 || product.description.search(reg) != -1 ;
    }))
  };


  export const searchProductHandler=(event)=>{
    event.preventDefault();
    const Inputvalue = search.value;


if(Inputvalue === ""){
 fetch(baseUrl +"/products")
 .then(res=> res.json())
 .then(products=>{

     ProductRender(products)
 })

    
 }else{

  SearchporductItem(Inputvalue);
};




  };

  export const clearButton =()=>{
    clearbtn.classList.replace("hidden","block");
  clearbtn.addEventListener("click",()=>{
    search.value=null;
    fetch(baseUrl +"/products")
    .then(res => res.json())
    .then(products =>{

        ProductRender(products)
    })
  })


  }
   export const notFound =()=>{
    const div = document.createElement("div");
    div.className ="text-center  text-2xl";
    div.innerHTML =`<p class="">Opps sorry No match products</p>`;
    return div;


   };

   
  