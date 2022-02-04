const favChapter = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const chapterList = document.querySelector('.list');

addButton.addEventListener('click', () => {
    let chapterName = favChapter.value; 
    let li = document.createElement('li');
    li.textContent = chapterName;
    chapterList.appendChild(li);
})