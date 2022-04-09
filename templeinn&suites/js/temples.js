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
    let fs6 = document.createElement('fieldset');
    let l6 = document.createElement('legend');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let p8 = document.createElement('p');
    let a = document.createElement('a');
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');
    let btn = document.createElement('button');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let tname = `${temple.name}`;
    let tidname = tname.substring(0,3);
    
    // Change the textContent property of the h3 element to contain the temple name
    h3.textContent = `${temple.name}`;
    h3.setAttribute('class', "tmplname smallshown");
    // Add/append the section(card) with the h3 element
    card.appendChild(h3);
    // Create and append a do you like button icon
    let likeimg = "./images/doyoulikeit.jpg";
    img2.src = `${likeimg}`;
    img2.setAttribute('alt', `like button not pressed`);// Set the alternate text on the likeimg 
    span1.appendChild(img2);
    btn.appendChild(span1);
    // Create and append an I like button icon
    let likeimg2 = "./images/ilikeit.png";
    img3.src = `${likeimg2}`;
    img3.setAttribute('alt', `like button pressed`);// Set the alternate text on the likeimg2 
    span2.appendChild(img3);
    btn.appendChild(span2);
    btn.setAttribute('id', tidname);
    let storedlike = window.localStorage.getItem(tidname);
    if (storedlike == 1) {
      btn.setAttribute('class', "like");
    }
    card.appendChild(btn);
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
    // Change the textContent property of the p7 element to contain the temple email address
    p7.textContent = `${temple.email}`;
    fs1.appendChild(p7);
    // Change the properties of the a element to contain the temple website
    a.href = `${temple.website}`;
    a.target = "_blank";
    a.textContent = `Visit Website`;
    fs1.appendChild(a);
    // Add/append the section(card) with the a element
    card.appendChild(fs1);
    
    // Change the textContent property of the p3 element to contain the temple status
    l2.textContent = `Status`;
    fs2.appendChild(l2);
    p3.textContent = `${temple.status}`;
    fs2.appendChild(p3);
    // Add/append the section(card) with the p3 element
    card.appendChild(fs2);

    l3.textContent = `Services`;
    fs3.appendChild(l3);
    // Change the textContent property of the p4 element to contain the temple services
    p4.innerHTML = `${temple.services}`;
    // Add/append the section(card) with the p4 element
    fs3.appendChild(p4);
    card.appendChild(fs3);
    
    l6.textContent = `Ordinances/Sessions`;
    fs6.appendChild(l6);
    // Change the textContent property of the p8 element to contain the temple sessions
    p8.innerHTML = `${temple.session}`;
    // Add/append the section(card) with the p8 element
    fs6.appendChild(p8);
    card.appendChild(fs6);

    l4.textContent = `Closures`;
    fs4.appendChild(l4);
    // Change the textContent property of the p5 element to contain the temple closures
    p5.innerHTML = `${temple.closure}`;
    // Add/append the section(card) with the p5 element
    fs4.appendChild(p5);
    card.appendChild(fs4);

    l5.textContent = `History`;
    fs5.appendChild(l5);
    // Change the textContent property of the p6 element to contain the temple history
    p6.innerHTML = `${temple.history}`;
    fs5.appendChild(p6);
    // Add/append the section(card) with the p6 element
    card.appendChild(fs5);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#templelist').appendChild(card);
  } 

  getTemples();

  async function getTemples() {
    const response = await fetch(requestData);
    const temple_dir = await response.json();
    console.log(temple_dir);
    // loop through all the temples in the list
    temple_dir.forEach(displayTemple);
    // set up the toggles for all temples
    toggle_setup();
  }

  function toggle_setup() {
    const tcar = document.getElementById('Car');
    tcar.onclick = toggleCar;
    const tdal = document.getElementById('Dal');
    tdal.onclick = toggleDal;
    const tind = document.getElementById('Ind');
    tind.onclick = toggleInd;
    const tsao = document.getElementById('Sao');
    tsao.onclick = toggleSao;
    const tsan = document.getElementById('San');
    tsan.onclick = toggleSan;
    const tsap = document.getElementById('Sap');
    tsap.onclick = toggleSap;
    const tjoh = document.getElementById('Joh');
    tjoh.onclick = toggleJoh;
    const tpro = document.getElementById('Pro');
    tpro.onclick = togglePro;
    const trom = document.getElementById('Rom');
    trom.onclick = toggleRom;
    const twas = document.getElementById('Was');
    twas.onclick = toggleWas;
  }

  function toggleCar() {
    let lscar = window.localStorage.getItem("Car");
    if (lscar == 0 || lscar == undefined) {
      lscar = 1;
    } else {
      lscar = 0;
    }
    window.localStorage.setItem("Car", lscar); 
    document.getElementById("Car").classList.toggle("like");
  }

  function toggleDal() {
    let lsdal = window.localStorage.getItem('Dal');
    if (lsdal == 0 || lsdal == undefined) {
      lsdal = 1;
    } else {
      lsdal = 0;
    }
    window.localStorage.setItem('Dal', lsdal); 
    document.getElementById('Dal').classList.toggle("like");
  }

  function toggleInd() {
    let lsind = window.localStorage.getItem('Ind');
    if (lsind == 0 || lsind == undefined) {
      lsind = 1;
    } else {
      lsind = 0;
    }
    window.localStorage.setItem('Ind', lsind); 
    document.getElementById('Ind').classList.toggle("like");
  }

  function toggleJoh() {
    let lsjoh = window.localStorage.getItem('Joh');
    if (lsjoh == 0 || lsjoh == undefined) {
      lsjoh = 1;
    } else {
      lsjoh = 0;
    }
    window.localStorage.setItem('Joh', lsjoh); 
    document.getElementById('Joh').classList.toggle("like");
  }

  function togglePro() {
    let lspro = window.localStorage.getItem('Pro');
    if (lspro == 0 || lspro == undefined) {
      lspro = 1;
    } else {
      lspro = 0;
    }
    window.localStorage.setItem('Pro', lspro); 
    document.getElementById('Pro').classList.toggle("like");
  }

  function toggleRom() {
    let lsrom = window.localStorage.getItem('Rom');
    if (lsrom == 0 || lsrom == undefined) {
      lsrom = 1;
    } else {
      lsrom = 0;
    }
    window.localStorage.setItem('Rom', lsrom); 
    document.getElementById('Rom').classList.toggle("like");
  }

  function toggleSan() {
    let lssan = window.localStorage.getItem('San');
    if (lssan == 0 || lssan == undefined) {
      lssan = 1;
    } else {
      lssan = 0;
    }
    window.localStorage.setItem('San', lssan); 
    document.getElementById('San').classList.toggle("like");
  }

  function toggleSao() {
    let lssao = window.localStorage.getItem('Sao');
    if (lssao == 0 || lssao == undefined) {
      lssao = 1;
    } else {
      lssao = 0;
    }
    window.localStorage.setItem('Sao', lssao); 
    document.getElementById('Sao').classList.toggle("like");
  }

  function toggleSap() {
    let lssap = window.localStorage.getItem('Sap');
    if (lssap == 0 || lssap == undefined) {
      lssap = 1;
    } else {
      lssap = 0;
    }
    window.localStorage.setItem('Sap', lssap); 
    document.getElementById('Sap').classList.toggle("like");
  }

  function toggleWas() {
    let lswas = window.localStorage.getItem('Was');
    if (lswas == 0 || lswas == undefined) {
      lswas = 1;
    } else {
      lswas = 0;
    }
    window.localStorage.setItem('Was', lswas); 
    document.getElementById('Was').classList.toggle("like");
  }

  




