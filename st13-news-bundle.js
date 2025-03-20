// ST13 News Bundle - Combined Data and Functionality
// This file contains both the news data and the news archive functionality

console.log("ST13 News Bundle loading...");

// ===== NEWS DATA =====
const st13NewsData = [
    // Type 1: Has image AND "Read More" link
    {
        title: "News Headline #23",
        date: "March 23, 2025",
        content: "This is the content of news article #23. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "12-1.png",
        link: "https://example.com/news23"
    },
    // Type 2: Has image but NO "Read More" link
    {
        title: "News Headline #22",
        date: "March 22, 2025",
        content: "This is the content of news article #22. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "background.png",
        link: null
    },
    // Type 3: Has NO image but has "Read More" link
    {
        title: "News Headline #21",
        date: "March 21, 2025",
        content: "This is the content of news article #21. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: "https://example.com/news21"
    },
    // Type 4: Has NO image and NO "Read More" link
    {
        title: "News Headline #20",
        date: "March 20, 2025",
        content: "This is the content of news article #20. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: null
    },
    // Repeat all four types
    {
        title: "News Headline #19",
        date: "March 19, 2025",
        content: "This is the content of news article #19. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "slogan1.jpg",
        link: "https://example.com/news19"
    },
    {
        title: "News Headline #18",
        date: "March 18, 2025",
        content: "This is the content of news article #18. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: null
    },
    {
        title: "News Headline #17",
        date: "March 17, 2025",
        content: "This is the content of news article #17. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: "https://example.com/news17"
    },
    {
        title: "News Headline #16",
        date: "March 16, 2025",
        content: "This is the content of news article #16. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: null
    },
    // Repeat all four types again
    {
        title: "News Headline #15",
        date: "March 15, 2025",
        content: "This is the content of news article #15. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: "https://example.com/news15"
    },
    {
        title: "News Headline #14",
        date: "March 14, 2025",
        content: "This is the content of news article #14. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: null
    },
    {
        title: "News Headline #13",
        date: "March 13, 2025",
        content: "This is the content of news article #13. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: "https://example.com/news13"
    },
    {
        title: "News Headline #12",
        date: "March 12, 2025",
        content: "This is the content of news article #12. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: null
    },
    // Repeat all four types again
    {
        title: "News Headline #11",
        date: "March 11, 2025",
        content: "This is the content of news article #11. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: "https://example.com/news11"
    },
    {
        title: "News Headline #10",
        date: "March 10, 2025",
        content: "This is the content of news article #10. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: null
    },
    {
        title: "News Headline #9",
        date: "March 9, 2025",
        content: "This is the content of news article #9. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: "https://example.com/news9"
    },
    {
        title: "News Headline #8",
        date: "March 8, 2025",
        content: "This is the content of news article #8. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: null
    },
    // Repeat all four types again
    {
        title: "News Headline #7",
        date: "March 7, 2025",
        content: "This is the content of news article #7. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: "https://example.com/news7"
    },
    {
        title: "News Headline #6",
        date: "March 6, 2025",
        content: "This is the content of news article #6. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: null
    },
    {
        title: "News Headline #5",
        date: "March 5, 2025",
        content: "This is the content of news article #5. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: "https://example.com/news5"
    },
    {
        title: "News Headline #4",
        date: "March 4, 2025",
        content: "This is the content of news article #4. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: null
    },
    // Last set to make 24 total (6 sets of 4 types)
    {
        title: "News Headline #3",
        date: "March 3, 2025",
        content: "This is the content of news article #3. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: "https://example.com/news3"
    },
    {
        title: "News Headline #2",
        date: "March 2, 2025",
        content: "This is the content of news article #2. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "https://via.placeholder.com/150",
        link: null
    },
    {
        title: "News Headline #1",
        date: "March 1, 2025",
        content: "This is the content of news article #1. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: "https://example.com/news1"
    },
    {
        title: "News Headline #0",
        date: "February 28, 2025",
        content: "This is the content of news article #0. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: null,
        link: null
    }
];

// ===== NEWS ARCHIVE FUNCTIONALITY =====
function initST13NewsArchive() {
    console.log("Initializing ST13 News Archive...");
    
    // Add CSS for news archive
    addNewsArchiveStyles();
    
    // Initialize variables
    const articlesPerPage = 5;
    let currentPage = parseInt(sessionStorage.getItem("currentPage")) || 1;
    let totalPages = Math.ceil(st13NewsData.length / articlesPerPage);
    
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
        const articles = st13NewsData.slice(start, end);

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