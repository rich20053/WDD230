/*const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("todaysdate").textContent = new Date().toLocaleDateString('en-US', options);
document.getElementById("chamberdate").textContent = new Date().toLocaleDateString('en-UK', options);
document.getElementById("joindate").defaultValue = "2014-02-09";*/
const options2 = {year: 'numeric', month: 'numeric', day: 'numeric' };
var jdate = new Date();
var jdatestr = jdate.toLocaleString('en-US');
/*jdate.substring(0,16);*/
document.getElementById("joindate").value = jdate;
console.log(jdate);
