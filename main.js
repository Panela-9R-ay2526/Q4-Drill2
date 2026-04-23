function checkHeatIndex() {

    // Get values
    let temp = Number(document.getElementById("temp").value);
    let humidity = Number(document.getElementById("humidity").value);

    // Heat Index Formula
    let heatIndex = temp + (0.33 * humidity) - 4;

    let status = "";

    // CONDITIONS (based on your table)
    if (heatIndex <= 27) {
        status = "Comfortable / Cool";
    } 
    else if (heatIndex >= 28 && heatIndex <= 32) {
        status = "Warm";
    } 
    else if (heatIndex >= 33 && heatIndex <= 37) {
        status = "Hot";
    } 
    else if (heatIndex >= 38 && heatIndex <= 41) {
        status = "Very Hot / Caution";
    } 
    else {
        status = "Extreme Heat / Danger";
    }

    // OUTPUT (alert like your screenshot)
    alert("Heat Index: " + heatIndex.toFixed(1) + "°C\nStatus: " + status);
}