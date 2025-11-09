"use script";
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


