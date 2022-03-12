const spotlightData = 'https://rich20053.github.io/WDD230/chamber/data/data.json';
var spotFilled = 0;

function displaySpotlight(business, card) {  // Create elements to add to the document

    let h3 = document.createElement('h3');
    let img1 = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let a = document.createElement('a');
  
    // Change the textContent property of the h2 element to contain the business name
    h3.textContent = `${business.name}`;
    h3.setAttribute('id', "bizname");
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    // Change the src and alt properties of the img1 element to contain the business icon
    img1.src = `${business.icon}`;
    img1.setAttribute('alt', `${business.name} icon`);// Set the alternate text on the img1 
    img1.setAttribute('loading', 'lazy');
    card.appendChild(img1);
    // Change the textContent property of the p1 element to contain the 1 line business address
    p1.textContent = `${business.address}`;
    // Add/append the section(card) with the p1 element
    card.appendChild(p1);
    // Change the textContent property of the p2 element to contain the business phone number
    p2.textContent = `${business.phone}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p2);
    // Change the properties of the a element to contain the business website
    a.href = `${business.website}`;
    a.target = "_blank";
    a.textContent = `${business.website}`;
    // Add/append the section(card) with the a element
    card.appendChild(a);
    // Change the textContent property of the p3 element to contain the business contact email
    p3.textContent = `${business.contact}`;
    // Add/append the section(card) with the p3 element
    card.appendChild(p3);
  } 

function findSpotlight(business) {  // Create elements to add to the document
    console.log(business.name);
    if ((business.membership != "Gold" && business.membership != "Silver") || spotFilled == 3)
        return;
    else {
        console.log(business.membership);
        if (spotFilled == 0) {
            let bizCard = document.querySelector('#spotlight1');
            displaySpotlight(business, bizCard);
        }
        if (spotFilled == 1) {
            let bizCard = document.querySelector('#spotlight2');
            displaySpotlight(business, bizCard);
        }
        if (spotFilled == 2) {
            let bizCard = document.querySelector('#spotlight3');
            displaySpotlight(business, bizCard);
        }
        spotFilled++;
    }
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
    const shuffledList = bizList.sort((a, b) => 0.5 - Math.random());
/*    var bestBiz = bizList.filter( sl =>
        sl.membership == "Gold" || 
        sl.membership == "Silver"); */
    shuffledList.forEach(findSpotlight);
  }

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




