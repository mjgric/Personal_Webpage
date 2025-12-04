"use strict";
function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (navbar.style.display === "block") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "block";
        }
    }
}
document.getElementById("navbarToggle")?.addEventListener("click", toggleNavbar);


interface Page {
    name: string; // display name
    href: string; // file path
}

const pages: Page[] = [ // All current Html Pages
    { name: "Home", href: "home.html" },
    { name: "About Me", href: "aboutme.html" },
    { name: "Hobbies", href: "hobbies.html" },
    { name: "Anime", href: "anime.html" },
]

export function createNavbar() {
    const navbar = document.getElementById("navbar");
    if (navbar == null) {
        console.error("Navbar not found!")
        return;
    }

    const currPage = window.location.pathname.split("/").pop();
    // This method implements an array of pages that then adds a class
    // depending on if the current HTML is open
    navbar.innerHTML = `
        <nav class = "navbarContainer"> <!-- Navbar that will be used on all pages-->
        <img src = src/navigation-bar.png id = navbarToggle alt = "Menu Icon"> 
        ${pages.map(page => ` 
                <a class="navitem ${page.href === currPage ? "activeNavItem" : ""}" 
                   href="${page.href}">
                   ${page.name}
                </a>
            `).join("")}
        </nav>`;

        const toggleButton = document.getElementById("navbarToggle");
        toggleButton?.addEventListener("click", toggleNavbar)
        // notes for myself:
        /**
         * the interface keyword in js defines the properties of
         * and object such as a page. I used this to define an object
         * with a name and a pathway or link. I then put all my pages
         * into an array to make it easier to loop through. 
         * pages.map creates an array of strings for every page item
         * in pages. 
         * 
         * then for every page item, I use a template literal 
         * which allows me to use variables and functions inside a string
         * 
         * I use this to create each html element as well as add the active
         * class if we are on said page. I then join all the strings of the array
         * together so that the inner html is correct. 
         */
}
