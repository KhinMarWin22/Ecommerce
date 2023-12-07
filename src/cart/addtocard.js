import Swal from "sweetalert2";
import { baseUrl, cartData, cartItems, config, totalCost } from "../selector";
import { Counter, TotalCalculate } from "../function";

export const addToCardHandaler =async(event)=>{
    if(event.target.classList.contains("add-to-cart-btn")){
        
      const currentcard = event.target.closest(".product-cart");
    const currentID = currentcard.getAttribute("product-id");

    const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      event.target.classList.add("active");
  
      event.target.innerText = `Added`;
      // fetch product data
      const res = await fetch(`${baseUrl}/products/${currentID}`, requestOptions);
      const data = await res.json();
      const productData = {
        ...data,
        quantity: config.min,
      };
      // push data
      cartData.unshift(productData);
  
      Swal.fire({
        icon: "success",
        title: "Item added to cart!",
      });
  
      itemInCartRender(cartData);
    
    }
  };


  export const itemInCartCreate = (products,quantity =1)=>{
    const itemInCart = document.createElement("div");
    itemInCart.className ='border shadow-2xl overflow-hidden cart-item  p-2 mt-3 mb-3';
    itemInCart.setAttribute("item-id",products.id)
    itemInCart.innerHTML =` <div class="flex h-full items-center justify-between ">
    
    <img src="${products.image}" alt="" class="w-14 mb-2 item-in-cart-img">
    <button class="rounded-[4px] px-1 py-1   text-white bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
      </button>
</div>
<p class="mb-2 item-in-cart-title text-sm font-sans font-medium">${products.title}</p>
<div class="flex justify-between items-center mt-3">
<p class="item-in-cart-price font-bold text-xl">$ <span>${products.price}</span></p>
<div class="flex  text-center rounded ">
    <button class="decrease-btn px-3 bg-yellow-200 rounded-s-md text-neutral-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
      </svg>
      </button>
    <p class="w-12 h-7 item-count border-neutral-200" >${quantity}</p>
    <button class="increase-btn px-3 rounded-e-md  bg-blue-700 text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
      </svg>
      </button>

</div>
</div>`;
return itemInCart;



  }

  export const itemInCartRender = (cartRenders)=>{
    cartItems.innerHTML="";
    cartRenders.forEach(el => {
        cartItems.append(itemInCartCreate(el));
        Counter();
        TotalCalculate();
        
    });

  }