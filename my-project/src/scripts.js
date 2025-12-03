"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNavbar = createNavbar;
function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar) {
        if (navbar.style.display === "block") {
            navbar.style.display = "none";
        }
        else {
            navbar.style.display = "block";
        }
    }
}
(_a = document.getElementById("navbarToggle")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", toggleNavbar);
function createNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar == null) {
        console.error("Navbar not found!");
        return;
    }
    navbar.innerHTML = "\n        <nav class = \"navbarContainer\"> <!-- Navbar that will be used on all pages-->\n        <a class = \"navitem activeNavItem\" href = \"home.html\" id = \"home\"> Home </a>\n        <a class = \"navitem\" href = \"aboutme.html\" id = \"aboutme\"> About Me </a>\n        <a class = \"navitem\" href = \"hobbies.html\" id = \"hobbies\"> Hobbies </a>\n        <a class = \"navitem\" href = \"anime.html\" id = \"anime\"> Anime </a>\n        </nav>";
}
