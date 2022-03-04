const requestData = 'https://rich20053.github.io/WDD230/chamber/data/data.json';

function displayBusiness(business) {  // Create elements to add to the document
    let card = document.createElement('section');
    let p5 = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let img1 = document.createElement('img');
  
    /*const space = " ";
    const birthdt = "Date of Birth: ";
    const birthplc = "Place of Birth: ";
    const dash = " - ";*/
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    p5.textContent = `${business.name}`;
    p5.setAttribute('id', "bizname");
    // Add/append the section(card) with the h2 element
    card.appendChild(p5);
    // Change the textContent property of the img1 element to contain the prophet's picture
    img1.src = `${business.icon}`;
    img1.setAttribute('alt', `${business.name} icon`);// Set the alternate text on the img1 
    img1.setAttribute('loading', 'lazy');
    card.appendChild(img1);
    // Change the textContent property of the p1 element to contain the prophet's birthdate
    p1.textContent = `${business.address}`;
    // Add/append the section(card) with the p1 element
    card.appendChild(p1);
    // Change the textContent property of the p1 element to contain the prophet's birthdate
    p2.textContent = `${business.phone}`;
    // Add/append the section(card) with the p1 element
    card.appendChild(p2);
    // Change the textContent property of the p2 element to contain the prophet's birthplace
    p3.textContent = `${business.website}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p3);
    // Change the textContent property of the p2 element to contain the prophet's birthplace
    p4.textContent = `${business.contact}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p4);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#bizdir').appendChild(card);
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




