document.addEventListener('DOMContentLoaded', function() {
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
});
