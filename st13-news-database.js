// ST13 News Database
// This file contains only the news data that can be updated independently

console.log("ST13 News Database loading...");

// ===== NEWS DATA =====
const st13NewsData = [
    // Type 1: Has image AND "Read More" link
    {
        title: "News Headline #23",
        date: "March 23, 2025",
        content: "This is the content of news article #23. It contains important information about the ST13 Heliophysics and Planetary Science Branch activities and research.",
        image: "12-1.png",
        link: "https://www.nasa.gov/"
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
        link: "https://www.nasa.gov/"
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

// Export the news data to make it available to the script
window.st13NewsData = st13NewsData;