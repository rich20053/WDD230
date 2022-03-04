const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


function displayProphets(prophets) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let img1 = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophets.name} ${prophets.lastname}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // Change the textContent property of the p1 element to contain the prophet's birthdate
    p1.textContent = `Date of Birth: ${prophets.birthdate}`;
    // Add/append the section(card) with the p1 element
    card.appendChild(p1);
    // Change the textContent property of the p2 element to contain the prophet's birthplace
    p2.textContent = `Place of Birth: ${prophets.birthplace}`;
    // Add/append the section(card) with the p2 element
    card.appendChild(p2);
    // Change the textContent property of the img1 element to contain the prophet's picture
    img1.src = `${prophets.imageurl}`;
    // Set the alternate text on the img1 element
    img1.alt = `Portrait of ${prophets.name} ${prophets.lastname} - ${prophets.order}`;
    card.appendChild(img1);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  } 


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});




