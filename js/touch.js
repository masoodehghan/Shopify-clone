const $ = document;

const currencyBlock = $.querySelector("#currency_block");
const dropdownCurrency = currencyBlock.lastElementChild;

const userBlock = $.querySelector('.header_user_info');
const dropDownUserBlock = userBlock.lastElementChild;

currencyBlock.firstElementChild.addEventListener("click", (e) => {
  e.stopPropagation();
  displayDropDown(dropdownCurrency);

});

$.querySelector("#page-content").addEventListener("click", (e) => {
    e.stopPropagation();
    hideDropDown(dropdownCurrency);
    hideDropDown(dropDownUserBlock);
});

userBlock.firstElementChild.addEventListener('click', (e) => {
    e.stopPropagation();
    displayDropDown(dropDownUserBlock);
})

function displayDropDown(el) {
    el.style.transform = "scale(1)";
    el.style.visibility = "visible";
}

function hideDropDown(el) {
    el.style = "";
}



