document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');

    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        burger.textContent = nav.classList.contains('active') ? '×' : '≡';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (window.innerWidth < 1440 &&
            !event.target.closest('#nav-links') &&
            !event.target.closest('#burger') &&
            nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.textContent = '≡';
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1440) {
            nav.classList.add('active');
        } else if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.textContent = '≡';
        }
    });
}); 