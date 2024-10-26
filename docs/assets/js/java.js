document.addEventListener('DOMContentLoaded', function() {
    // Blinkies toggle button functionality
    const toggleButton = document.getElementById('toggle-blinkies');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('hide-blinkies');
            // Toggle button text
            this.textContent = document.body.classList.contains('hide-blinkies') 
                ? 'Show Blinkies' 
                : 'Hide Blinkies';
        });
    }

    // Hamburger menu toggle functionality
    const hamburgerButton = document.getElementById('hamburger');
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', function() {
            const menu = document.getElementById('nav-menu');
            menu.classList.toggle('active'); // Toggle menu visibility
        });
    }
});
