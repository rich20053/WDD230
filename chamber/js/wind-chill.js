var tempF = parseFloat(document.getElementById('tempnow').innerHTML);
var windspeed = parseFloat(document.getElementById('wspeed').innerHTML);
var wchill = 35.74+0.6215*tempF-35.75*(windspeed**0.16)+0.4275*tempF*(windspeed**(0.16));
document.getElementById('windchill').textContent = wchill.toFixed(0);