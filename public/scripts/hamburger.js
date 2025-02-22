document.addEventListener("DOMContentLoaded", function () {
 const menuIcon = document.querySelector(".menu-icon");
 const navbarMenu = document.querySelector(".navbar-menu");

 menuIcon.addEventListener("click", function () {
   navbarMenu.style.display = navbarMenu.style.display === "flex" ? "none" : "flex";
 });
});