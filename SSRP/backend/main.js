// Cheeseburger menu JS
window.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('cheeseburger-menu');
    const drawer = document.getElementById('nav-drawer');
    const closeBtn = document.getElementById('close-drawer');

    if (burger && drawer) {
        burger.addEventListener('click', function () {
            const isOpen = !drawer.classList.contains('hidden');
            if (!isOpen) {
                drawer.classList.remove('hidden');
                burger.style.display = 'none';
            } else {
                drawer.classList.add('hidden');
                burger.style.display = '';
            }
        });
        // Optional: close drawer when clicking outside
        drawer.addEventListener('click', function (e) {
            if (e.target === drawer) {
                drawer.classList.add('hidden');
                burger.style.display = '';
            }
        });
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                drawer.classList.add('hidden');
                burger.style.display = '';
            });
        }
    }
});
