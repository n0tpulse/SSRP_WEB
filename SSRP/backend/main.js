function toggleDropdown(id) {
    // Close all dropdowns first
    const dropdowns = [
        'rulesDropdown',
        'discordsDropdown',
        'applicationsDropdown',
        'devteamDropdown',
        'mediateamDropdown'
    ];
    dropdowns.forEach(d => {
        if (d !== id) {
            const el = document.getElementById(d);
            if (el) el.classList.add('hidden');
        }
    });
    // Toggle the selected dropdown
    const el = document.getElementById(id);
    const button = el.previousElementSibling;
    const arrowSpan = button.querySelector('.dropdown-arrow');
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        if (arrowSpan) {
            arrowSpan.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 15l-7-7-7 7"/></svg>';
        }
    } else {
        el.classList.add('hidden');
        if (arrowSpan) {
            arrowSpan.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>';
        }
    }
}
// Close dropdowns when clicking outside

document.addEventListener('click', function (e) {
    // Remove arrow logic from here, handled in toggleDropdown
    const squares = [
        'rulesSquare',
        'discordsSquare',
        'applicationsSquare',
        'devteamSquare',
        'mediateamSquare'
    ];
    const dropdowns = [
        'rulesDropdown',
        'discordsDropdown',
        'applicationsDropdown',
        'devteamDropdown',
        'mediateamDropdown'
    ];
    let clickedSquare = false;
    squares.forEach(sq => {
        const el = document.getElementById(sq);
        if (el && el.contains(e.target)) clickedSquare = true;
    });
    let clickedDropdown = false;
    dropdowns.forEach(dd => {
        const el = document.getElementById(dd);
        if (el && el.contains(e.target)) clickedDropdown = true;
    });
    if (!clickedSquare && !clickedDropdown) {
        dropdowns.forEach(dd => {
            const el = document.getElementById(dd);
            if (el) {
                el.classList.add('hidden');
                const button = el.previousElementSibling;
                const arrowSpan = button.querySelector('.dropdown-arrow');
                if (arrowSpan) {
                    arrowSpan.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>';
                }
            }
        });
    }
});
const button = el.previousElementSibling;
const arrow = button.querySelector('dropdown-arrow');
if (arrow) {
    arrow.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>'; // Arrow down
}
