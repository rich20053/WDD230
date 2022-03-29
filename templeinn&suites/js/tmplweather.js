const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=35.199165&lon=-101.845276&units=Imperial&exclude=hourly,minutly&appid=e6e82e7efa65c4de43967a31ac32a4e3';
/*const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.2338&lon=-111.6585&units=Imperial&exclude=hourly,minutly&appid=e6e82e7efa65c4de43967a31ac32a4e3';
*/
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let tempstr = jsObject.current.temp;
    let tempF = parseFloat(tempstr);
    let tempint = tempF.toFixed(0);
    document.getElementById("tempnow").textContent = tempint.toString();
/*    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; */
    console.log("image");
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`; 
    const desc = jsObject.current.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weatherdesc').textContent = desc;
    /*let windspeed = jsObject.current.wind_speed;
    document.querySelector('#wspeed').textContent = windspeed;
    let wchill = 35.74+0.6215*tempF-35.75*(windspeed**0.16)+0.4275*tempF*(windspeed**(0.16));
    if (tempF > 50 || windspeed < 3) {
        document.getElementById('windchill').textContent = "N/A";
    }
    else {
        var strChill = wchill.toFixed(0) + "º F";
        document.getElementById('windchill').textContent = strChill;
    }   */
    let humidity = jsObject.current.humidity;
    document.querySelector('#humidity').textContent = humidity;
    for (d=0; d < 3; d++) {
        let iddstr = "#ddate"+ (d+1).toString();
        let tdayraw = jsObject.daily[d].dt;
        console.log(tdayraw)
        let tdate = new Date();
        tdate.setTime(tdayraw);
        console.log("convert to date")
        tday = tdate.getMonth()+1 + "/" + tdate.getDate()
        document.querySelector(iddstr).textContent = tday;
        let idtstr = "#daytemp"+ (d+1).toString();
        let dtemp = jsObject.daily[d].temp.day;
        document.querySelector(idtstr).textContent = dtemp.toFixed(0);

    }
    for (i=0; i < jsObject.alerts.length; i++) {
        let alertDesc = jsObject.alerts[i].description;
        alert(alertDesc);
    }  
});


