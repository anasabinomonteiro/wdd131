document.addEventListener('DOMContentLoaded', () => {
    // Get current count 
    let reviewCount = localStorage.getItem('reviewCount');

    // Initialize it to 0- first count
    if (reviewCount === null) {
        reviewCount = 0;
    }

    // Increment count
    reviewCount++;

    // Update count 
    localStorage.setItem('reviewCount', reviewCount);

    // Update count in HTML
    document.getElementById('reviewCount').textContent = reviewCount;

    // Log count to console
    console.log(`Total Reviews Submitted: ${reviewCount}`);
});