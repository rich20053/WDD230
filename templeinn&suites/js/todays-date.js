const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
/* Show current date on header */
document.getElementById("headerdate").textContent = new Date().toLocaleDateString('en-UK', options);

