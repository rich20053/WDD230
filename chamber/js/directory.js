const requestURL = './data/data.json';


function displayDirectory(business) {  // Create elements to add to the document
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


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayDirectory);
});




