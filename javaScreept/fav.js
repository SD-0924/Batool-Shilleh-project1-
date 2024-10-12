       document.addEventListener('DOMContentLoaded', () => {
            const favouritesToggle = document.getElementById('favouritesToggle');
            const favouritesSection = document.getElementById('favouritesSection');

            // Ensure the favouritesSection is initially hidden
            favouritesSection.style.bottom = '-100px'; // or use display: none; in CSS

            favouritesToggle.addEventListener('click', () => {
                if (favouritesSection.style.bottom === '0px') {
                    favouritesSection.style.bottom = '-100px'; // Hide the section
                } else {
                    favouritesSection.style.bottom = '0px'; // Show the section
                }
            });
        });