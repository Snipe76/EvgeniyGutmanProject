function toggleMenu() {
    var headerNavLinks = document.getElementById("nav-links");
    if (headerNavLinks.style.display === "flex" && window.innerWidth < 1440) {
        headerNavLinks.style.display = "none";
    } else {
        headerNavLinks.style.display = "flex";
    }
} 