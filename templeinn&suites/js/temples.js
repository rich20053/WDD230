const requestData = 'https://rich20053.github.io/WDD230/templeinn&suites/data/temple.json';

function displayTemple(temple) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let fs1 = document.createElement('fieldset');
    let l1 = document.createElement('legend');
    let fs2 = document.createElement('fieldset');
    let l2 = document.createElement('legend');
    let fs3 = document.createElement('fieldset');
    let l3 = document.createElement('legend');
    let fs4 = document.createElement('fieldset');
    let l4 = document.createElement('legend');
    let fs5 = document.createElement('fieldset');
    let l5 = document.createElement('legend');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let a = document.createElement('a');
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the temple name
    h3.textContent = `${temple.name}`;
    h3.setAttribute('class', "tmplname smallshown");
    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    // Change the src and alt properties of the img1 element to contain the temple icon
    let likeimg = "./images/doyoulikeit.png";
    img2.src = `${likeimg}`;
    img2.setAttribute('alt', `like button`);// Set the alternate text on the img1 
    img2.setAttribute('class', 'likebutton')
    card.appendChild(img2);
    
    // Change the src and alt properties of the img1 element to contain the temple icon
    img1.src = `${temple.photo}`;
    img1.setAttribute('alt', `${temple.name} photo`);// Set the alternate text on the img1 
    img1.setAttribute('loading', 'lazy');
    card.appendChild(img1);
    
    l1.textContent = `Information`;
    fs1.appendChild(l1);
        // Change the textContent property of the p1 element to contain the 1 line temple address
    p1.textContent = `${temple.address}, ${temple.city}`;
    fs1.appendChild(p1);
    // Change the textContent property of the p2 element to contain the temple phone number
    p2.textContent = `${temple.phone}`;
    fs1.appendChild(p2);
    // Change the properties of the a element to contain the temple website
    a.href = `${temple.website}`;
    a.target = "_blank";
    a.textContent = `Visit Website`;
    fs1.appendChild(a)
    // Add/append the section(card) with the a element
    card.appendChild(fs1);
    
    // Change the textContent property of the p3 element to contain the temple status
    l2.textContent = `Status`;
    fs2.appendChild(l2)
    p3.textContent = `${temple.status}`;
    fs2.appendChild(p3)
    // Add/append the section(card) with the p3 element
    card.appendChild(fs2);

    l3.textContent = `Services`;
    fs3.appendChild(l3)
    // Change the textContent property of the p4 element to contain the temple services
    p4.innerHTML = `${temple.services}`;
    // Add/append the section(card) with the p4 element
    fs3.appendChild(p4)
    card.appendChild(fs3);
    
    l4.textContent = `Closures`;
    fs4.appendChild(l4)
    // Change the textContent property of the p5 element to contain the temple closures
    p5.innerHTML = `${temple.closure}`;
    // Add/append the section(card) with the p5 element
    fs4.appendChild(p5)
    card.appendChild(fs4);

    l5.textContent = `History`;
    fs5.appendChild(l5)
    // Change the textContent property of the p6 element to contain the temple history
    p6.innerHTML = `${temple.history}`;
    fs5.appendChild(p6)
    // Add/append the section(card) with the p6 element
    card.appendChild(fs5);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#templelist').appendChild(card);
  } 

  getTemples();

  async function getTemples() {
    const response = await fetch(requestData);
    const temple_dir = await response.json();
    temple_dir.forEach(displayTemple);
  }




