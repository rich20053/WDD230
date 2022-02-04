const favChapter = document.querySelector('#favchap');
const addButton = document.querySelector('button');
//const delButton = document.querySelector('li button');
const chapterList = document.querySelector('.list');

addButton.addEventListener('click', () => {
    let chapterName = favChapter.value; 
    let li = document.createElement('li');
    li.innerHTML = chapterName + "<button>X</button>";
    chapterList.appendChild(li);
})

//delButton.addEventListener('click', () => {
    //let chapterName = favChapter.value; 
  //  let delli = document.('li');
    //li.innerHTML = chapterName + "<button>X</button>";
    //chapterList.appendChild(li);
//})
// class="deletebutton"