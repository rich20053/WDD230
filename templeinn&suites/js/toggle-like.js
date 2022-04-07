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

const y = document.getElementById('Sap');
y.onclick = toggleSap;

function toggleWas() {
    if (lssap) {
        window.localStorage.setItem('Was', false);        
    }
    else {
        window.localStorage.setItem('Was', true);        
    }
    document.getElementById('Was').classList.toggle("like");
}

const twas = document.getElementById('Was');
twas.onclick = toggleWas;

function toggleSão() {
    if (lssap) {
        window.localStorage.setItem('São', false);        
    }
    else {
        window.localStorage.setItem('São', true);        
    }
    document.getElementById('São').classList.toggle("like");
}

const tsao = document.getElementById('São');
tsao.onclick = toggleSão;

function toggleSan() {
    if (lssap) {
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
    if (lssap) {
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
    if (lssap) {
        window.localStorage.setItem('Ban', false);        
    }
    else {
        window.localStorage.setItem('Ban', true);        
    }
    document.getElementById('Ban').classList.toggle("like");
}

const tban = document.getElementById('Ban');
tban.onclick = toggleBan;

function toggleCar() {
    if (lssap) {
        window.localStorage.setItem('Car', false);        
    }
    else {
        window.localStorage.setItem('Car', true);        
    }
    document.getElementById('Car').classList.toggle("like");
}

const tcar = document.getElementById('Car');
tcar.onclick = toggleCar;

function toggleJoh() {
    if (lssap) {
        window.localStorage.setItem('Joh', false);        
    }
    else {
        window.localStorage.setItem('Joh', true);        
    }
    document.getElementById('Joh').classList.toggle("like");
}

const tjoh = document.getElementById('Joh');
tjoh.onclick = toggleJoh;

function toggleDal() {
    if (lssap) {
        window.localStorage.setItem('Dal', false);        
    }
    else {
        window.localStorage.setItem('Dal', true);        
    }
    document.getElementById('Dal').classList.toggle("like");
}

const tdal = document.getElementById('Dal');
tdal.onclick = toggleDal;

function toggleInd() {
    if (lssap) {
        window.localStorage.setItem('Ind', false);        
    }
    else {
        window.localStorage.setItem('Ind', true);        
    }
    document.getElementById('Ind').classList.toggle("like");
}

const tind = document.getElementById('Ind');
tind.onclick = toggleInd;

function togglePro() {
    if (lssap) {
        window.localStorage.setItem('Pro', false);        
    }
    else {
        window.localStorage.setItem('Pro', true);        
    }
    document.getElementById('Pro').classList.toggle("like");
}

const tpro = document.getElementById('Pro');
tpro.onclick = togglePro;

