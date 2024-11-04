const fixedPanel = $.getElementById("j-floor-fixed-panel");

window.addEventListener("scroll", () => {
  centerColumnWidth = $.getElementById("center_column").offsetWidth;
  if (scrollY > 966 && scrollY < 5530) {
    fixedPanel.classList.add("floor-fixed");
    fixedPanel.style.position = "fixed";
    fixedPanel.style.left = `${innerWidth / 2 - 665}px`;

    let categoryTab;
    for (categoryTab of $.querySelectorAll(".categoryTabs")) {
      isScrolledToElement(categoryTab);
    }

  } else {
    fixedPanel.classList.remove("floor-fixed");
  }
});

const topWindow = 0;
const botttomOfWindow = topWindow + document.body.scrollHeight;

function isScrolledToElement(el) {
  elParent = el.parentElement.parentElement;
  let bottomOfEl = elParent.offsetTop + elParent.scrollHeight;
  let fixedItem = $.querySelector(`.floor-nav-list a[href="#${el.id}"]`);
  if (elParent.offsetTop < scrollY && bottomOfEl > scrollY ) {
    fixedItem.classList.add('active');
  } else {
    fixedItem.classList.remove('active')
  }
}
