/**
 * NASA MSFC ST 13 Profile Page Scripts
 * Handles the interactive elements of staff profile pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Dropdown toggle functionality
    const dropdownHeaders = document.querySelectorAll('.profile-dropdown-header');
    
    dropdownHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on header
            this.classList.toggle('active');
            
            // Toggle content visibility
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            
            // Optional: Close other dropdowns when opening a new one
            // Remove this block if you want multiple dropdowns open at once
            dropdownHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
    
    // The following code has been removed to keep all dropdowns closed by default
    // If you want to open a specific dropdown by default, you can uncomment and modify this
    /*
    // Open the first dropdown by default
    if (dropdownHeaders.length > 0) {
        dropdownHeaders[0].click();
    }
    */
    
    // Update the last modified date if the element exists
    if (document.getElementById('last-modified-date')) {
        document.getElementById('last-modified-date').textContent = document.lastModified;
    }
});