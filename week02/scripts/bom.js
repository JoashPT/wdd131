const favchap = document.querySelector('#favchap');
const submit = document.querySelector('button');
const list = document.querySelector('#list');

submit.addEventListener('click', function() {
    if (favchap.value.trim() !== '') {
        const chapterTitle = document.createElement('li');
        const delButton = document.createElement('button');
        chapterTitle.textContent = favchap.value;
        chapterTitle.append(delButton);
        delButton.textContent = '\u{274C}';
        list.appendChild(chapterTitle);
        favchap.value = '';
        favchap.focus();

        delButton.addEventListener('click', function() {
            list.removeChild(chapterTitle);
            favchap.focus();
        });
    }
    else {
        favchap.focus();
    }
});