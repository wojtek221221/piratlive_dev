const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    // Sprawdzamy, czy menu jest widoczne
    if (mobileMenu.classList.contains('opacity-0')) {
        // Menu otwieramy
        mobileMenu.classList.remove('opacity-0', 'scale-95'); // Usuwamy początkowy stan
        mobileMenu.classList.add('opacity-100', 'scale-100'); // Dodajemy pełną widoczność i normalny rozmiar
    } else {
        // Menu zamykamy
        mobileMenu.classList.remove('opacity-100', 'scale-100'); // Usuwamy końcowy stan
        mobileMenu.classList.add('opacity-0', 'scale-95'); // Zmniejszamy i ukrywamy menu
    }
});
