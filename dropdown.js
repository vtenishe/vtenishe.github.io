// Dropdown Menu Functionality
// This JavaScript can be included in any page that needs dropdown functionality

// Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
  // Get the dropdown element
  const dropdown = document.getElementById(dropdownId);
  
  // Toggle the 'active' class to show/hide the dropdown
  dropdown.classList.toggle('active');
  
  // Toggle the 'active' class on the button to show active state
  const button = dropdown.previousElementSibling;
  button.classList.toggle('active');
  
  // Close other dropdowns
  const allDropdowns = document.querySelectorAll('.dropdown-menu');
  const allButtons = document.querySelectorAll('.custom-button');
  
  allDropdowns.forEach(function(item) {
      if (item.id !== dropdownId && item.classList.contains('active')) {
          item.classList.remove('active');
          // Find the associated button and remove active class
          item.previousElementSibling.classList.remove('active');
      }
  });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown-container')) {
      // Close all dropdowns when clicking outside
      const allDropdowns = document.querySelectorAll('.dropdown-menu');
      const allButtons = document.querySelectorAll('.custom-button');
      
      allDropdowns.forEach(function(dropdown) {
          dropdown.classList.remove('active');
      });
      
      allButtons.forEach(function(button) {
          button.classList.remove('active');
      });
  }
}, true);

// Function to initialize all dropdowns on the page
function initDropdowns() {
  // Add has-dropdown class to all buttons that have dropdown menus
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  
  dropdownContainers.forEach(function(container) {
      const button = container.querySelector('.custom-button');
      if (button) {
          button.classList.add('has-dropdown');
      }
  });
}

// Initialize dropdowns when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDropdowns);