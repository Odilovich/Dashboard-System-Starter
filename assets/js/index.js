"use strict";

// HTML elements select

let dropdown = $('.dropdown');
let dropdownMenu = $('.dropdown-menu');
let asideMenu = $('.aside-menu');
let toggleMenu = $('.toggle-menu');
let asideToggle = $('#aside');


// Dropdown menu functionality

dropdown.addEventListener("click",(e)=>{
    e.preventDefault();
    dropdownMenu.classList.toggle("show-dropdown")
})


// window.addEventListener("click", function(e){

//     if(e.target.nodeName != "HTML") {

//         if(!e.target.parentNode.classList.contains("dropdown-menu") || !e.target.parentNode.classList.contains("dropdown")) {
//             dropdownMenu.classList.add("show-dropdown");
//         }else {
//             dropdownMenu.classList.remove("show-dropdown")
//         }
//     }else {
//         dropdownMenu.classList.remove("show-dropdown")
//     }
// })

function renderNavigationMenu(data) {
    if(data.length) {
        data.forEach((el) => {
            const listItem = createElement('li', classListItem, `<a href="${el.link}" class="flex items-center gap-[5px]"><i class="bi ${el.icon} "></i><span>${el.title}</span></a>`)
            asideMenu.appendChild(listItem);
        })
    }
}

renderNavigationMenu(navigationMenu);


toggleMenu.addEventListener("click", ()=> {
    asideToggle.classList.toggle("hide-aside");
})