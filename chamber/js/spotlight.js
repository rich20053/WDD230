const spotlightData = 'https://rich20053.github.io/WDD230/chamber/data/data.json';

function displaySpotlight(business) {  // Create elements to add to the document
    console.log(business.membership)
} 

  console.log("Load Spotlight");
  getSpotlight();
  /*getDirectory.catch(error => {
    console.log("Error!");
    console.error(error);
  })*/

  async function getSpotlight() {
    console.log("get data");
    const response = await fetch(spotlightData);
    var bizList = await response.json();
    var bestBiz = bizList.filter(
        membership == "Gold" | 
        membership == "Silver"
    )
    bestBiz.forEach(displaySpotlight);
  }

  var newArray = homes.filter(
    price <= 1000 & 
    sqft >= 500 & 
    num_of_beds >=2 & 
    num_of_baths >= 2.5 );


/*
fetch(requestData)
  .then(function (response) {
    console.log("1st request promise")
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business_dir = jsonObject['directory'];
}); */




