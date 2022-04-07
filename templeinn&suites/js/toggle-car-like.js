
function toggleCar() {
    let lscar = window.localStorage.getItem('Car');
    console.log("Cardston Temple");
    if (lscar) {
        window.localStorage.setItem('Car', false);        
        console.log("Cardston Temple");
    }
    else {
        window.localStorage.setItem('Car', true);        
        console.log("Cardston Temple");
    }
    document.getElementById('Car').classList.toggle("like");
}

const tcar = document.getElementById('Car');
console.log("Car Toggle");
tcar.onclick = toggleCar;

