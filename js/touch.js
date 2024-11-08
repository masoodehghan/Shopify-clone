
const currencyBlock = $.querySelector("#currency_block");
const dropdownCurrency = currencyBlock.lastElementChild;

const userBlock = $.querySelector(".header_user_info");
const dropDownUserBlock = userBlock.lastElementChild;
const footerQuickLink = $.querySelectorAll(".footer-block.block");

currencyBlock.firstElementChild.addEventListener("click", (e) => {
  e.stopPropagation();
  if (dropdownCurrency.style.visibility) {
    hideDropDown(dropdownCurrency);
  } else {
    displayDropDown(dropdownCurrency);
  }
});

document.body.addEventListener("click", (e) => {
  e.stopPropagation();
  hideDropDown(dropdownCurrency);
  hideDropDown(dropDownUserBlock);
});

userBlock.firstElementChild.addEventListener("click", (e) => {
  e.stopPropagation();
  if (dropDownUserBlock.style.visibility) {
    hideDropDown(dropDownUserBlock);
  } else {
    displayDropDown(dropDownUserBlock);
  }
});

function displayDropDown(el) {
  el.style.transform = "scale(1)";
  el.style.visibility = "visible";
}

function hideDropDown(el) {
  el.style = "";
}



