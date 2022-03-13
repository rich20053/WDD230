var ww = window.innerWidth;

if (ww >= 592 && ww <= 991) {
    toggleView(); 
}

function toggleView() {
    document.getElementById('cardviewBtn').classList.toggle("open");
/*    document.getElementById('listviewBtn').classList.toggle("open"); */
    document.getElementById('bizdir').classList.toggle("open");    
}

/*
const lv = document.getElementById('listviewBtn');
lv.onclick = toggleView; */

const c = document.getElementById('cardviewBtn');
c.onclick = toggleView;

