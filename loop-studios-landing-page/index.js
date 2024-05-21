"use strict";

// DOM elements
const menuIcons = document.querySelectorAll(".ico");

menuIcons.forEach((cur, ind) => {
  cur.addEventListener("click", function () {
    let index = cur.classList.contains("ico-ham") ? 1 : 0;
    cur.classList.remove("active-icon");
    menuIcons[index].classList.add("active-icon");
  });
});
