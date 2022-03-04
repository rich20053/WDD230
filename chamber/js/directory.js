const requestData = 'https://rich20053.github.io/WDD230/chamber/data/data.json';

function displayBusiness(business) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let a = document.createElement('a');
    let img1 = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the business name
    h2.textContent = `${business.name}`;
    h2.setAttribute('id', "bizname");
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // Change the src and alt properties of the img1 element to contain the business icon
    img1.src = `${business.icon}`;
    img1.setAttribute('alt', `${business.name} icon`);// Set the alternate text on the img1 
    img1.setAttribute('loading', 'lazy');
    card.appendChild(img1);
    // Change the textContent property of the p2 element to contain the 1 line business address
    p1.textContent = `${business.address}, ${business.city}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p1);
    // Change the textContent property of the p2 element to contain the 2 line business address
    p2.textContent = `${business.address}\n${business.city}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p2);
    // Change the textContent property of the p3 element to contain the business phone number
    p3.textContent = `${business.phone}`;
    // Add/append the section(card) with the p3 element
    card.appendChild(p3);
    // Change the properties of the a element to contain the business website
    a.href = `${business.website}`;
    a.target = "_blank";
    a.textContent = `${business.website}`;
    // Add/append the section(card) with the a element
    card.appendChild(a);
    // Change the textContent property of the p4 element to contain the business contact email
    p4.textContent = `${business.contact}`;
    // Add/append the section(card) with the p4 element
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




