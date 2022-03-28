const requestData = 'https://rich20053.github.io/WDD230/templeinn&suites/data/temple.json';

function displayTemple(temple) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let a = document.createElement('a');
    let img1 = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the temple name
    h3.textContent = `${temple.name}`;
    h3.setAttribute('class', "tmplname");
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    // Change the src and alt properties of the img1 element to contain the temple icon
    img1.src = `${temple.photo}`;
    img1.setAttribute('alt', `${temple.name} photo`);// Set the alternate text on the img1 
    img1.setAttribute('loading', 'lazy');
    card.appendChild(img1);
    // Change the textContent property of the p1 element to contain the temple status
    p1.textContent = `${temple.status}`;
    // Add/append the section(card) with the p1 element
    card.appendChild(p1);
    // Change the textContent property of the p2 element to contain the 1 line temple address
    p2.textContent = `${temple.address}, ${temple.city}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p2);
    // Change the textContent property of the p3 element to contain the temple phone number
    p3.textContent = `${temple.phone}`;
    // Add/append the section(card) with the p3 element
    card.appendChild(p3);
    // Change the properties of the a element to contain the temple website
    a.href = `${temple.website}`;
    a.target = "_blank";
    a.textContent = `${temple.website}`;
    // Add/append the section(card) with the a element
    card.appendChild(a);
    // Change the textContent property of the p4 element to contain the temple services
    p4.innerHTML = `${temple.services}`;
    // Add/append the section(card) with the p4 element
    card.appendChild(p4);
    // Change the textContent property of the p5 element to contain the temple closures
    p5.innerHTML = `${temple.closure}`;
    // Add/append the section(card) with the p5 element
    card.appendChild(p5);
    // Change the textContent property of the p6 element to contain the temple history
    p6.innerHTML = `${temple.history}`;
    // Add/append the section(card) with the p6 element
    card.appendChild(p6);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#templelist').appendChild(card);
  } 

  getTemples();
  /*getDirectory.catch(error => {
    console.log("Error!");
    console.error(error);
  })*/

  async function getTemples() {
    const response = await fetch(requestData);
    const temple_dir = await response.json();
    temple_dir.forEach(displayTemple);
  }

  
/*
fetch(requestData)
  .then(function (response) {
    console.log("1st request promise")
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temple_dir = jsonObject['directory'];
}); */




