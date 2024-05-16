"use strict";

// DOM Elements
const hamMenu = document.querySelector(".ham-menu");
const closeMenu = document.querySelector(".close-menu");
const navPanel = document.querySelector(".nav-panel");
const header = document.querySelector("header");
const main = document.querySelector("main");
const headerBack = document.querySelector(".black-background");
const heroContent = document.querySelector(".hero-content");

function changeIconState() {
  this.classList.remove("active-menu");
  if (this.alt === "ham-menu") {
    navPanel.classList.add("active-nav-panel");
    closeMenu.classList.add("active-menu");
    // Remove Display Contents
    main.style.display = "none";
    headerBack.style.opacity = 1;
    heroContent.style.zIndex = -1;
    heroContent.style.opacity = 0;
  } else {
    hamMenu.classList.add("active-menu");
    navPanel.classList.remove("active-nav-panel");
    headerBack.style.opacity = 0;
    heroContent.style.zIndex = 0;
    heroContent.style.opacity = 1;
    main.style.display = "block";
  }
}

// NAV PANEL
hamMenu.addEventListener("click", changeIconState);
closeMenu.addEventListener("click", changeIconState);
