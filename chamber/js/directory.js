const requestData = 'https://github.com/rich20053/WDD230/master/chamber/data/data.json';

function displayBusiness(business) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img1 = document.createElement('img');
  
    /*const space = " ";
    const birthdt = "Date of Birth: ";
    const birthplc = "Place of Birth: ";
    const dash = " - ";*/
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.name}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // Change the textContent property of the img1 element to contain the prophet's picture
    img1.src = `${business.icon}`;
    img1.setAttribute('alt', `${business.name} icon`);// Set the alternate text on the img1 element
    card.appendChild(img1);
    // Change the textContent property of the p1 element to contain the prophet's birthdate
    p1.textContent = `${business.phone}`;
    // Add/append the section(card) with the p1 element
    card.appendChild(p1);
    // Change the textContent property of the p2 element to contain the prophet's birthplace
    p2.textContent = `${business.website}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p2);
    // Change the textContent property of the p2 element to contain the prophet's birthplace
    p3.textContent = `${business.contact}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p3);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  } 

  console.log("Load Directory");
  getDirectory();
  /*getDirectory.catch(error => {
    console.log("Error!");
    console.error(error);
  })*/

  async function getDirectory() {
    console.log("get data");
    const response = await fetch(requestData);
    const business_dir = await response.json();
    business_dir.forEach(displayBusiness);
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




