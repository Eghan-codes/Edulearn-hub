/*JAVASCRIPT FOR MOBILE MENU
     This script only affects mobile devices; desktop ignores it via CSS
*/
// Get the hamburger button element by its ID
        const hamburger = document.getElementById('hamburger');
        
        // Get the navigation menu element by its ID
        const navMenu = document.getElementById('nav-menu');
        
        // Add click event listener to hamburger button
        // When clicked, it toggles the 'active' class on the menu
        hamburger.addEventListener('click', function() {
            // Toggle 'active' class - adds it if not present, removes it if present
            navMenu.classList.toggle('active');
            
            // Optional: Add animation to hamburger icon (turns into X)
            this.classList.toggle('active');
        });
        
        // Close menu when a navigation link is clicked (optional but user-friendly)
        const navLinks = document.querySelectorAll('#nav-menu a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Remove 'active' class to close menu after clicking a link
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        /* 
        HOW THIS JAVASCRIPT WORKS:
        1. On mobile, the menu is hidden by default (display: none in CSS)
        2. When hamburger button is clicked, 'active' class is added to menu
        3. CSS rule 'nav ul.active' changes display to 'flex', showing the menu
        4. On desktop (768px+), CSS forces menu to always display with !important
        5. This means the JavaScript only affects mobile devices
        */