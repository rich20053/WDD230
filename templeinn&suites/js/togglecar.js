function toggleCar() {
    let lscar = window.localStorage.getItem('Car');
    if (lscar == 0) {
        lscar = 1;
    } else {
        lscar = 0;
    }
    window.localStorage.setItem('Car', lscar); 
    document.getElementById('Car').classList.toggle("like");
}

const tcar = document.getElementById('Carp');
tcar.onclick = toggleCar;