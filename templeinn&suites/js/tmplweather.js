/* Get weather data from API */
/* test alerts = const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=35.222&lon=-101.8313&units=Imperial&exclude=hourly,minutly&appid=e6e82e7efa65c4de43967a31ac32a4e3'; */
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.689060&lon=-78.886696&units=Imperial&exclude=hourly,minutly&appid=e6e82e7efa65c4de43967a31ac32a4e3';
/* san diego const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=32.7157&lon=-117.1611&units=Imperial&exclude=hourly,minutly&appid=e6e82e7efa65c4de43967a31ac32a4e3';*/
/*const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.2338&lon=-111.6585&units=Imperial&exclude=hourly,minutly&appid=e6e82e7efa65c4de43967a31ac32a4e3';
*/
/* Fetch Weather Data */
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    /* Temperature */
    let tempstr = jsObject.current.temp;
    let tempF = parseFloat(tempstr);
    let tempint = tempF.toFixed(0);
    document.getElementById("tempnow").textContent = tempint.toString();
    /* Weather Image and Description */
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`; 
    const desc = jsObject.current.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weatherdesc').textContent = desc;
    /* Humidity */
    let humidity = jsObject.current.humidity;
    document.querySelector('#humidity').textContent = humidity;
    /* Three Day Forecast */
    for (d=0; d < 3; d++) {
        let iddstr = "#ddate" + (d+1).toString();
        let adate = new Date();
        let tdate = new Date();
        tdate.setDate(adate.getDate()+d);
        let tday = tdate.getMonth()+1 + "/" + tdate.getDate();
        document.querySelector(iddstr).textContent = tday;
        let idtstr = "#daytemp"+ (d+1).toString();
        let dtemp = jsObject.daily[d].temp.day;
        document.querySelector(idtstr).textContent = dtemp.toFixed(0);
    }
    /* Alerts */
    const alertlist = jsObject.alerts
    if (alertlist != undefined) {
        for (i=0; i < alertlist.length; i++) {
            let alertDesc = alertlist[i].event;
            displayWeatherAlert(alertDesc, );
        }  
    }

    /* Alert Output */
    function displayWeatherAlert(adesc) {  // Create elements to add to the document
        let parent = document.querySelector('#wthralert');
        let amsg = document.createElement('div');
        let p1 = document.createElement('p');
        let b2 = document.createElement('button');
      
        amsg.classList.add("alertdivs");
        // Change the textContent property of the p1 element to contain the alert message
        p1.textContent = `${adesc}`;
        // Add/append the section(card) with the p1 element
        amsg.appendChild(p1);
        // Change the textContent property of the b2 element to contain the button
        b2.textContent = 'X';
        b2.addEventListener('click', () => {
            parent.removeChild(amsg);
        })
        // Add/append the section(amsg) with the b2 element
        amsg.appendChild(b2);
        // Add/append the existing HTML div with the cards class with the section(card)
        parent.appendChild(amsg);
    } 
    
});
