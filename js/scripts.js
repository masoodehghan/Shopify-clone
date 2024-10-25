const $ = document;

const alphaVerticalMenu = $.querySelector('#alpha-vertical-menu');
const verticalMenuDropDownBlcok = $.querySelector('.block_content')

alphaVerticalMenu.addEventListener('mouseover', (e) => {
    e.preventDefault()
    verticalMenuDropDownBlcok.style.display = 'block';
    console.log(verticalMenuDropDownBlcok);
})

alphaVerticalMenu.addEventListener('mouseout', (e) => {
    e.preventDefault()
    
    verticalMenuDropDownBlcok.style.display = 'none';
    console.log(verticalMenuDropDownBlcok);
})