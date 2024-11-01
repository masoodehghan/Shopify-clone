import { CarouselItem} from '../components/CarouselItem/CarouselItem.js';

const $ = document;

customElements.define('carousel-item', CarouselItem);

const alphaVerticalMenu = $.querySelector('#alpha-vertical-menu');
const verticalMenuDropDownBlcok = $.querySelector('.block_content')

alphaVerticalMenu.addEventListener('mouseover', (e) => {
    e.preventDefault()
    verticalMenuDropDownBlcok.style.display = 'block';
})

alphaVerticalMenu.addEventListener('mouseout', (e) => {
    e.preventDefault()
    
    verticalMenuDropDownBlcok.style.display = 'none';
})



const userInfoDropDownMenu = $.querySelector(".header_user_info .links")
const userInfoDrop = $.querySelector(".header_user_info .popup-title");
window.addEventListener('resize', () => {
    if(innerWidth < 1000) {
        userInfoDropDownMenu.classList.add("dropdown-menu")
        userInfoDrop.parentElement.classList.add('popup-over')
        userInfoDrop.style.display = 'block';
    } else {
        userInfoDropDownMenu.classList.remove("dropdown-menu")
        userInfoDrop.parentElement.classList.remove('popup-over')
        userInfoDrop.style.display = 'none';
    
    }

})


