var tempF = parseFloat(document.getElementById('tempnow').innerHTML);
var windspeed = parseFloat(document.getElementById('wspeed').innerHTML);
var wchill = 35.74+0.6215*tempF-35.75*(windspeed**0.16)+0.4275*tempF*(windspeed**(0.16));
if (tempF > 50 || windspeed < 3) {
    document.getElementById('windchill').textContent = "N/A";
    /*
    tempDegree.style.display = "none";
    tempFahrenheit.style.display = "none"; */
}
else {
    var strChill = wchill.toFixed(0) + "º F";
    document.getElementById('windchill').textContent = strChill;
   /* 
    tempDegree.style.display = "block";
    tempFahrenheit.style.display = "block"; */
}
