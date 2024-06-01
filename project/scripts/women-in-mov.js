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

    //Handle age range display
     // Handle age range selection
     var ageSelect = document.getElementById("age");
     var ageMessage = document.getElementById("ageMessage");
 
     if (ageSelect && ageMessage) {
         ageSelect.addEventListener("change", function() {
             var selectedAgeRange = ageSelect.value;
             var message = "";
 
             switch (selectedAgeRange) {
                 case "18-30":
                     message = "You are in the prime of your youth!";
                     break;
                 case "30-50":
                     message = "Great time to focus on well-being and balance.";
                     break;
                 case "50-70":
                     message = "Embrace the wisdom and experience of life!";
                     break;
                 case "70-90":
                     message = "Stay active and enjoy every moment.";
                     break;
                 case "90+":
                     message = "What an incredible journey! Keep dancing!";
                     break;
                 default:
                     message = "";
             }
 
             ageMessage.textContent = message;
        });
    }
});