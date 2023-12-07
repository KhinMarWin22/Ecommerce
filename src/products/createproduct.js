import { rateStar } from "../function";

export const createProduct =(products)=>{
    const productDiv = document.createElement("div");
    productDiv.className = "w-full mx-8 max-w-sm bg-white product-cart border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ";
    productDiv.setAttribute("product-id",products.id);
 
  productDiv.innerHTML =`  <a href="#">
  <img class="p-8 rounded-t-lg product-img" src="${products.image}" alt="product image" />
</a>
<div class="px-5 pb-5">
  <a href="#" class="mt-4">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">${products.title}</h5>
  </a>
  <p class="mt-4 line-clamp-2">${products.description.substring(0, 120)}</p>
  <div class="flex items-center justify-between mt-4 mb-5 ">
      
    <div class="flex">
      
  ${rateStar(products.rating.rate.toFixed(0))}
    </div>
      <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"><span>(${products.rating.rate}/5)</span></span>
  </div>
  <div class="flex items-center justify-between">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">$ <span>${products.price}</span></span>
      <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 add-to-cart-btn focus:outline-none focus:ring-blue-300 active:bg-blue-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
  </div>
</div>`;
return productDiv;

}