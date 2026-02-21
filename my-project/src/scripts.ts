"use strict";

// ---------- Page Interface and Pages ----------
interface Page {
  name: string; // display name
  href: string; // file path
}

const pages: Page[] = [
  { name: "Home", href: "home.html" },
  { name: "About Me", href: "aboutme.html" },
  { name: "Hobbies", href: "hobbies.html" },
  { name: "Anime", href: "anime.html" },
];

// ---------- Clip-Path Functions ----------
function updateClip(): void {
  const toggle = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");
  if (!toggle || !menu) return;

  const toggleRect = toggle.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();

  const x = toggleRect.left + toggleRect.width / 2 - menuRect.left;
  const y = toggleRect.top + toggleRect.height / 2 - menuRect.top;

  menu.style.setProperty("--clip-x", `${x}px`);
  menu.style.setProperty("--clip-y", `${y}px`);
}

function toggleNavbar(): void {
  updateClip(); // make sure the circle is centered on click
  const menu = document.getElementById("navbarMenu");
  menu?.classList.toggle("closed");
}

// Update clip on window resize
window.addEventListener("resize", updateClip);

// ---------- Navbar Creation ----------
export function createNavbar(): void {
  const navbar = document.getElementById("navbar");
  if (!navbar) {
    console.error("Navbar container not found!");
    return;
  }

  const currPage = window.location.pathname.split("/").pop();

  navbar.innerHTML = `
    <nav class="navbarContainer">
      <img src="/navigation-bar.png" id="navbarToggle" alt="Menu Icon">
      <div id="navbarMenu" class="navbarMenu">
        ${pages
          .map(
            (page) => `
          <a class="navitem ${page.href === currPage ? "activeNavItem" : ""}"
             href="${page.href}">
             ${page.name}
          </a>
        `
          )
          .join("")}
      </div>
    </nav>
  `;

  // Add click listener AFTER HTML exists
  const toggleButton = document.getElementById("navbarToggle");
  toggleButton?.addEventListener("click", toggleNavbar);

  // Initial clip update so it's correctly positioned at page load
  updateClip();
}
