function toggleMenu() {
    var headerNavLinks = document.getElementById("nav-links");
    if (headerNavLinks.style.display === "flex") {
        headerNavLinks.style.display = "none";
    } else {
        headerNavLinks.style.display = "flex";
    }
} 