document.addEventListener("DOMContentLoaded", function() {
    // Type current year
    var currentYear = new Date().getFullYear();

    // Update content id "currentYear"
    var currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }

    // Type last modification date
    var lastModifiedDate = document.lastModified;

    // Update content id "lastModifiedDate"
    var lastModifiedDateElement = document.getElementById("lastModifiedDate");
    if (lastModifiedDateElement) {
        lastModifiedDateElement.textContent = lastModifiedDate;
    }
});