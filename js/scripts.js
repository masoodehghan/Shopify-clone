const $ = document;

const currencyBlock = $.querySelector('.currency-block');
const dropDownMenu = $.querySelector('.dropdown-menu');

currencyBlock.addEventListener('mouseover', (e) => {
    e.target.style.cursor = 'pointer' 
    dropDownMenu.style.display = 'block'
})

currencyBlock.addEventListener('mouseleave', () => {
    dropDownMenu.style.display = 'none'
})


