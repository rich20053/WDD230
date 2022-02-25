const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("todaysdate").textContent = new Date().toLocaleDateString('en-US', options);
document.getElementById("chamberdate").textContent = new Date().toLocaleDateString('en-UK', options);
var jdatestr = new Date().toISOString();
jdatestr = jdatestr.substring(0,16);
document.getElementById("joindate").value = jdatestr;
