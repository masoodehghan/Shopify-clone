
const paneltoolBtn = $.querySelector(".panelbutton");
const paneltool = $.getElementById("paneltool");

paneltoolBtn.addEventListener("click", () => {
  paneltool.firstElementChild.classList.toggle("active");
});

const layoutControl = $.querySelector(".layout-control");

for (let control of layoutControl.childNodes) {
  control.addEventListener("click", (e) => {
    e.preventDefault();

    e.target.classList.add("selected");
    let siblingElem =
      e.target.nextElementSibling || e.target.previousElementSibling;
    siblingElem.classList.remove("selected");

    $.body.classList.toggle("layout-boxed-lg");
  });
}

const onOffSwitch = $.querySelectorAll(".onoffswitch");

for (let switches of onOffSwitch) {
  switches.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.target.checked);
    e.target.checked = !Boolean(e.target.checked);
  });
}
