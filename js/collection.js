import { gridTemplate } from "./grid.js";
import { listTemplate } from "./list.js";

document.addEventListener('load', () => {
  addStyleToList("grid");
  setTimeout(displayProductWithAnimation, 1000)

})

const productList = document.getElementById("product_list");

const gridProductBlock = document.querySelectorAll(".grid  .animated");
let listProductBlock;

let isListDisplayed = false;

window.addEventListener("scroll", () => {
  displayProductWithAnimation()
    
});

const changeViewBtns = document.querySelectorAll(".change-view");

for (let changeViewBtn of changeViewBtns) {
  changeViewBtn.addEventListener("click", (e) => {
    let element = e.target.dataset.view
      ? e.target
      : e.target.parentElement.parentElement;

    if (element.dataset.view === "list") {
      productList.innerHTML = listTemplate;
      productList.classList.remove("grid");
      productList.classList.add("list");
      addStyleToList("list");
      displayProductWithAnimation();
      isListDisplayed = true;

      element.previousElementSibling.classList.remove("change-view--active");
    } else {
      productList.innerHTML = gridTemplate;
      productList.classList.remove("list");
      productList.classList.add("grid");
      addStyleToList("grid");
      displayProductWithAnimation();
      element.nextElementSibling.classList.remove("change-view--active");
    }

    element.classList.add("change-view--active");
  });
}

function addStyleToList(displayType) {
  listProductBlock = document.querySelectorAll(`.${displayType} .wow`);
  let product;
  for (product of listProductBlock) {
    product.style = "";

    product.style.animationName = "none";
    product.style.animationDelay = product.dataset.wowDelay;
    product.style.visibility = "hidden";

    // window.scrollTo(0, 0);
  }
}

function displayProductWithAnimation() {
  listProductBlock = Array.from(listProductBlock);
  let shown = listProductBlock.filter((e) => {
    return (
      e.offsetTop < innerHeight + scrollY && !e.classList.contains("animated")
    );
  });
  if (isListDisplayed) {
    for (let show of shown) {
      show.style.visibility = "visible";
      show.classList.add("animated");
      show.style.animationName = "fadeInUp";
    }
  } else {
    for (let show of shown) {
      show.style.visibility = "visible";
      show.classList.add("animated");
      show.style.animationName = "fadeIn";
    }
  }
  }

