const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Provo&units=Imperial&appid=e6e82e7efa65c4de43967a31ac32a4e3';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let tempstr = jsObject.main.temp;
    let tempF = parseFloat(tempstr);
    let tempint = tempF.toFixed(0);
    document.getElementById("tempnow").textContent = tempint.toString();
/*    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; */
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@2x.png`; 
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weatherdesc').textContent = desc;
    let windspeed = jsObject.wind.speed;
    document.querySelector('#wspeed').textContent = windspeed;
    let wchill = 35.74+0.6215*tempF-35.75*(windspeed**0.16)+0.4275*tempF*(windspeed**(0.16));
    if (tempF > 50 || windspeed < 3) {
        document.getElementById('windchill').textContent = "N/A";
    }
    else {
        var strChill = wchill.toFixed(0) + "º F";
        document.getElementById('windchill').textContent = strChill;
    }   
});


