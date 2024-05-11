// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if the temperature is in Celsius or Fahrenheit
    
    const isCelsius = true; // temperature = Celsius 

    // Constants for wind chill calculation
    const a = isCelsius ? 13.12 : 0.6215;
    const b = isCelsius ? 0 : 35.74;
    const c = isCelsius ? 0.3965 : 0.4275;
    const d = isCelsius ? 0.16 : 35.75;
    const e = isCelsius ? 0.16 : 0.16;

    // Calculate wind chill factor
    const windChill = isCelsius ?
        Math.round((13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))) * 10) / 10 :
        Math.round((35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))) * 10) / 10;

    return windChill;
}

// Function to display wind chill 
function displayWindChill() {
    const temperature = 10; // Example - Static temperature value 
    const windSpeed = 5; // Example - Static wind speed value

    // Check if conditions are met for viable wind chill calculation
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.querySelector('.weather').innerHTML += `<span>Wind Chill: ${windChill}&deg;C</span>`; // Display wind chill factor
    } else {
        document.querySelector('.weather').innerHTML += '<span>Wind Chill: N/A</span>'; // Display N/A if conditions not met
    }
}

// Display wind chill factor when the page loads
window.addEventListener('load', displayWindChill);
