document.addEventListener('DOMContentLoaded', () => {
    // Get current count 
    let shareCount = localStorage.getItem('shareCount');

    // Initialize it to 0- first count
    if (shareCount === null) {
        shareCount = 0;
    }

    // Increment count
    shareCount++;

    // Update count 
    localStorage.setItem('shareCount', shareCount);

    // Update count in HTML
    document.getElementById('shareCount').textContent = shareCount;

    // Log count to console
    console.log(`Total Testimonials Shared: ${shareCount}`);
});