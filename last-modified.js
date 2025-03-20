// File containing the last modified date for the ST13 website
// Update this file to change the date across all pages

const lastModifiedDate = "March 19, 2025";
const nasaOfficial = "Valeriy Tenishev";

// Function to update the footer with the last modified date
function updateLastModified() {
  // Find all elements with the last-modified class
  const lastModifiedElements = document.querySelectorAll('.last-modified');
  
  // Update each element with the date from this file
  lastModifiedElements.forEach(element => {
    element.textContent = `Last Modified: ${lastModifiedDate}`;
  });
  
  // Find all elements with the nasa-official class
  const nasaOfficialElements = document.querySelectorAll('.nasa-official');
  
  // Update each element with the official name from this file
  nasaOfficialElements.forEach(element => {
    element.textContent = `NASA Official: ${nasaOfficial}`;
  });
}

// Call the update function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateLastModified);