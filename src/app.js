import { Fectdata } from "./categories/feth";
import { clearButton, searchProductHandler } from "./products/searchproduct";
import { search, searchForm } from "./selector";

class App {
    initialRender(){
        Fectdata();
    };
    listener(){
searchForm.addEventListener("submit",searchProductHandler);
search.addEventListener("focus",clearButton)
    }
    init(){
        console.log("hi");
        this.initialRender();
        this.listener();
    }
};
export default App;