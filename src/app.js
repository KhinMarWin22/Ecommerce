

import { addToCardHandaler } from "./cart/addtocard";
import { Fectdata } from "./categories/feth";

import { clearButton, searchProductHandler } from "./products/searchproduct";
import { cardList, search, searchForm } from "./selector";

class App {
    initialRender(){
        Fectdata();
    };
    listener(){
searchForm.addEventListener("submit",searchProductHandler);
search.addEventListener("focus",clearButton);
cardList.addEventListener("click",addToCardHandaler)
    };
    init(){
        console.log("hi");
        this.initialRender();
        this.listener();
    }
};
export default App;