const favchap = document.querySelector('#favchap');
const submit = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

submit.addEventListener('click', function() {
    if (favchap.value.trim() !== '') {
        displayList(favchap.value);
        chaptersArray.push(favchap.value);
        setChapterList();
        favchap.value = '';
        favchap.focus();
    }
    
    else {
        favchap.focus();
    }
})

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function displayList(chapter) {
    const chapterTitle = document.createElement('li');
    const delButton = document.createElement('button');
    chapterTitle.textContent = chapter;
    delButton.classList.add("delete");
    delButton.textContent = '\u{274C}';
    chapterTitle.append(delButton);
    list.appendChild(chapterTitle);

    delButton.addEventListener('click', function() {
        list.removeChild(chapterTitle);
        delChapter(chapterTitle.textContent);
        favchap.focus();
    });
}

function setChapterList() {
    localStorage.setItem("favChapList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("favChapList"));
}

function delChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}