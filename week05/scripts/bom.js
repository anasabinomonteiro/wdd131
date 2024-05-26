const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter =>{
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChaptersList();
        input.value = '';
        input.focus();
     }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('cash data')
}
 function setChaptersList() {
    localStorage.setItem('favBOMlist', JSON.stringify(chaptersArray));
 }

function getChapterList() {
    return JSON.parse(localStorage.getItem('favBOMlist'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1); //last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter); //return everything except chpater removed
    setChaptersList(); // call to update localStorage
}
// button.addEventListener('click', function(){
//     if (input.value.trim() !== "") {
//         const chapterText = input.value.trim();

//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         li.textContent = chapterText;

//         deleteButton.textContent = '❌';
//         deleteButton.addEventListener('click', function(){
//             // Remove item from the list
//             list.remove();
//             input.focus(); // focus to input field
//         });

//         li.appendChild(deleteButton);
//         list.appendChild(li);

//         input.value = ""; //clean input field -empty
//     } else {
//         // empty enter - return to  input
//         input.focus();
//     }
// });