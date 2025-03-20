// ST13 News Archive Script
// This file contains only the functionality for displaying news
// It depends on st13-news-database.js being loaded first

console.log("ST13 News Archive Script loading...");

// ===== NEWS ARCHIVE FUNCTIONALITY =====
function initST13NewsArchive() {
    console.log("Initializing ST13 News Archive...");
    
    // Check if news data is available
    if (!window.st13NewsData) {
        console.error("News data not found! Make sure st13-news-database.js is loaded before this script.");
        return null;
    }
    
    // Add CSS for news archive
    addNewsArchiveStyles();
    
    // Initialize variables
    const articlesPerPage = 5;
    let currentPage = parseInt(sessionStorage.getItem("currentPage")) || 1;
    let totalPages = Math.ceil(window.st13NewsData.length / articlesPerPage);
    
    // Track which image is currently enlarged
    let enlargedImage = null;
    
    // Function to render news articles
    function renderNews() {
        console.log("Rendering news articles...");
        const container = document.getElementById("news-container");
        if (!container) {
            console.error("News container element not found! Make sure there's an element with id 'news-container'");
            return;
        }
        
        container.innerHTML = "";
        
        const start = (currentPage - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const articles = window.st13NewsData.slice(start, end);

        articles.forEach(article => {
            const articleElement = document.createElement("div");
            articleElement.classList.add("news-article");
            articleElement.innerHTML = `
                <div>
                    <h3>${article.title}</h3>
                    <p><strong>${article.date}</strong></p>
                    <p>${article.content}</p>
                    ${article.link ? `<p><a href="${article.link}">Read More</a></p>` : ""}
                </div>
                ${article.image ? `<img src="${article.image}" alt="${article.title}">` : ""}
            `;
            container.appendChild(articleElement);
        });
        
        renderPagination();
        
        // Add image zoom functionality after all articles are rendered
        setupImageZoom();
    }
    
    // Function to setup image zoom
    function setupImageZoom() {
        // Reset enlarged image tracking
        enlargedImage = null;
        
        // Get all article images
        const allImages = document.querySelectorAll('.news-article img');
        
        // Add click event for image enlargement
        allImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            
            // Remove any existing click listeners
            img.removeEventListener('click', imageClickHandler);
            
            // Add new click listener
            img.addEventListener('click', imageClickHandler);
        });
        
        // Add document click handler to detect clicks outside images
        document.removeEventListener('click', documentClickHandler);
        document.addEventListener('click', documentClickHandler);
    }
    
    // Image click handler
    function imageClickHandler(e) {
        e.stopPropagation();
        
        // Don't zoom if the click target is a link or inside a link
        if (e.target.closest('a')) {
            return;
        }
        
        const img = this;
        
        if (enlargedImage === img) {
            // Reset this image
            img.style.transform = 'scale(1)';
            img.style.zIndex = '1';
            img.style.cursor = 'zoom-in';
            enlargedImage = null;
        } else {
            // First, reset any currently enlarged image
            if (enlargedImage) {
                enlargedImage.style.transform = 'scale(1)';
                enlargedImage.style.zIndex = '1';
                enlargedImage.style.cursor = 'zoom-in';
            }
            
            // Calculate transform origin to keep image within viewport
            const rect = img.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            let originX = 'center';
            let originY = 'center';
            
            // Horizontal positioning
            if (rect.left < viewportWidth / 3) {
                originX = 'left';
            } else if (rect.right > viewportWidth * 2/3) {
                originX = 'right';
            }
            
            // Vertical positioning
            if (rect.top < viewportHeight / 3) {
                originY = 'top';
            } else if (rect.bottom > viewportHeight * 2/3) {
                originY = 'bottom';
            }
            
            img.style.transformOrigin = `${originX} ${originY}`;
            img.style.transform = 'scale(3)';
            img.style.zIndex = '1000';
            img.style.cursor = 'zoom-out';
            enlargedImage = img;
        }
    }
    
    // Document click handler
    function documentClickHandler(e) {
        // Ignore clicks on images - they're handled by the image click handler
        if (e.target.tagName === 'IMG' && e.target.closest('.news-article')) {
            return;
        }
        
        // Reset enlarged image if there is one
        if (enlargedImage) {
            enlargedImage.style.transform = 'scale(1)';
            enlargedImage.style.zIndex = '1';
            enlargedImage.style.cursor = 'zoom-in';
            enlargedImage = null;
        }
    }

    // Function to render pagination controls
    function renderPagination() {
        console.log("Rendering pagination...");
        const paginationContainer = document.getElementById("pagination");
        if (!paginationContainer) {
            console.error("Pagination container element not found! Make sure there's an element with id 'pagination'");
            return;
        }
        
        paginationContainer.innerHTML = "";

        paginationContainer.innerHTML += `<span class="page-item ${currentPage === 1 ? 'disabled' : ''}" onclick="ST13NewsArchive.changePage(${currentPage - 1})">«</span>`;

        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.innerHTML += `<span class="page-item ${i === currentPage ? 'active' : ''}" onclick="ST13NewsArchive.changePage(${i})">${i}</span>`;
        }

        paginationContainer.innerHTML += `<span class="page-item ${currentPage === totalPages ? 'disabled' : ''}" onclick="ST13NewsArchive.changePage(${currentPage + 1})">»</span>`;
    }
    
    // Function to add necessary styles
    function addNewsArchiveStyles() {
        console.log("Adding news archive styles...");
        if (document.getElementById("st13-news-styles")) {
            console.log("Styles already added, skipping...");
            return;
        }
        
        const styleElement = document.createElement('style');
        styleElement.id = "st13-news-styles";
        styleElement.textContent = `
            .news-container {
                width: 90%;
                max-width: 900px;
                margin: 0 auto;
                text-align: left;
            }
            .news-article {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                padding: 15px 0;
                text-align: left;
            }
            .news-article div {
                flex: 1;
            }
            .news-article h3 {
                margin: 10px 0;
                color: #003366;
            }
            .news-article p {
                margin: 5px 0;
                color: #333;
            }
            .news-article img {
                max-width: 150px;
                height: auto;
                margin-left: 20px;
                border-radius: 5px;
                transition: transform 0.3s ease;
                position: relative;
            }
            .news-article a {
                color: #003366;
                text-decoration: none;
                font-weight: bold;
                cursor: pointer;
            }
            .news-article a:hover {
                text-decoration: underline;
            }
            .pagination {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                margin-top: 20px;
            }
            .page-item {
                border: 1px solid #ccc;
                padding: 8px 12px;
                cursor: pointer;
                border-radius: 5px;
                background-color: #f0f0f0;
                transition: background-color 0.3s ease;
            }
            .page-item.active {
                background-color: #003366;
                color: white;
                font-weight: bold;
            }
            .page-item:hover {
                background-color: #ddd;
            }
            .page-item.disabled {
                opacity: 0.5;
                pointer-events: none;
            }
        `;
        document.head.appendChild(styleElement);
    }
    
    // Function to change page
    function changePage(newPage) {
        console.log(`Changing to page ${newPage}...`);
        if (newPage >= 1 && newPage <= totalPages) {
            currentPage = newPage;
            sessionStorage.setItem("currentPage", currentPage);
            renderNews();
        }
    }
    
    // Public interface
    return {
        init: function() {
            console.log("Initializing news archive...");
            renderNews();
        },
        changePage: changePage
    };
}

// Create global namespace for the news archive
window.ST13NewsArchive = initST13NewsArchive();

// Initialize the news archive when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded, initializing ST13 News Archive...");
    if (window.ST13NewsArchive) {
        window.ST13NewsArchive.init();
    } else {
        console.error("ST13NewsArchive not initialized properly!");
    }
});