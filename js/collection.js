import { gridTemplate } from "./grid.js";
import { listTemplate } from "./list.js";


const productList = document.getElementById('product_list');

const changeViewBtns = document.querySelectorAll(".change-view");


for(let changeViewBtn of changeViewBtns) {
    changeViewBtn.addEventListener('click', (e) => {
        let element = e.target.dataset.view ? e.target : e.target.parentElement.parentElement;
        if(element.dataset.view === 'list') {
            productList.innerHTML = listTemplate;
            element.previousElementSibling.classList.remove("change-view--active")

        } else {
            productList.innerHTML = gridTemplate;
            element.nextElementSibling.classList.remove("change-view--active")
        
        }

        element.classList.add("change-view--active")
    })  

    // console.log(changeViewBtn);
}

