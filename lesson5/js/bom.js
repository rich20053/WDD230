const favChapter = document.querySelector('#favchap');
favChapter.focus();
const addButton = document.querySelector('button');
const chapterList = document.querySelector('.list');

addButton.addEventListener('click', () => {
    let chapterName = favChapter.value; 
    if (chapterName != "") {
        let li = document.createElement('li');
        li.textContent = chapterName;
        const delButton = document.createElement("button");
        delButton.textContent = "❌";
        li.append(delButton);
        chapterList.append(li);    
        delButton.addEventListener('click', () => {
            chapterList.removeChild(li);
            favChapter.focus();
            favChapter.value = "";
        })
    }
    favChapter.focus();
    favChapter.value = "";
})

