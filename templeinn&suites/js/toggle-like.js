function toggleCar() {
    const lscar = window.localStorage.getItem('Car');
    const lscarn = !lscar;
    console.log(lscar);
    window.localStorage.setItem('Car', lscarn); 
    console.log(lscarn);
    document.getElementById('Car').classList.toggle("like");
}

const tcar = document.getElementById('Carp');
tcar.onclick = toggleCar;

function toggleDal() {
    let lsdal = window.localStorage.getItem('Dal');
    if (lsdal) {
        window.localStorage.setItem('Dal', false);        
    }
    else {
        window.localStorage.setItem('Dal', true);        
    }
    document.getElementById('Dal').classList.toggle("like");
}

const tdal = document.getElementById('Dall');
tdal.onclick = toggleDal;
/*
function toggleInd() {
    let lsdal = window.localStorage.getItem('Ind');
    if (lsdal) {
        window.localStorage.setItem('Ind', false);        
    }
    else {
        window.localStorage.setItem('Ind', true);        
    }
    document.getElementById('Ind').classList.toggle("like");
}

const tind = document.getElementById('Ind');
tind.onclick = toggleInd;

function toggleSao() {
    let lssao = window.localStorage.getItem('Sao');
    if (lssao) {
        window.localStorage.setItem('Sao', false);        
    }
    else {
        window.localStorage.setItem('Sao', true);        
    }
    document.getElementById('Sao').classList.toggle("like");
}

const tsao = document.getElementById('Sao');
tsao.onclick = toggleSao;

function toggleSan() {
    let lssan = window.localStorage.getItem('San');
    if (lssan) {
        window.localStorage.setItem('San', false);        
    }
    else {
        window.localStorage.setItem('San', true);        
    }
    document.getElementById('San').classList.toggle("like");
}

const tsan = document.getElementById('San');
tsan.onclick = toggleSan;

function toggleRom() {
    let lsrom = window.localStorage.getItem('Rom');
    if (lsrom) {
        window.localStorage.setItem('Rom', false);        
    }
    else {
        window.localStorage.setItem('Rom', true);        
    }
    document.getElementById('Rom').classList.toggle("like");
}

const trom = document.getElementById('Rom');
trom.onclick = toggleRom;

function toggleBan() {
    let lsban = window.localStorage.getItem('Ban');
    if (lsban) {
        window.localStorage.setItem('Ban', false);        
    }
    else {
        window.localStorage.setItem('Ban', true);        
    }
    document.getElementById('Ban').classList.toggle("like");
}

const tban = document.getElementById('Ban');
tban.onclick = toggleBan;

function toggleJoh() {
    let lsjoh = window.localStorage.getItem('Joh');
    if (lsjoh) {
        window.localStorage.setItem('Joh', false);        
    }
    else {
        window.localStorage.setItem('Joh', true);        
    }
    document.getElementById('Joh').classList.toggle("like");
}

const tjoh = document.getElementById('Joh');
tjoh.onclick = toggleJoh;

function togglePro() {
    let lspro = window.localStorage.getItem('Pro');
    if (lspro) {
        window.localStorage.setItem('Pro', false);        
    }
    else {
        window.localStorage.setItem('Pro', true);        
    }
    document.getElementById('Pro').classList.toggle("like");
}

const tpro = document.getElementById('Pro');
tpro.onclick = togglePro;

function toggleSap() {
    let lssap = window.localStorage.getItem('Sap');
    if (lssap) {
        window.localStorage.setItem('Sap', false);        
    }
    else {
        window.localStorage.setItem('Sap', true);        
    }
    document.getElementById('Sap').classList.toggle("like");
}

const tsap = document.getElementById('Sap');
tsap.onclick = toggleSap;

const twas = document.getElementById('Was');
twas.onclick = toggleWas;

function toggleWas() {
    let lswas = window.localStorage.getItem('Was');
    if (lswas) {
        window.localStorage.setItem('Was', false);        
    }
    else {
        window.localStorage.setItem('Was', true);        
    }
    document.getElementById('Was').classList.toggle("like");
}
*/
