const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// const li = document.createElement('li');
// const deleteButton = document.createElement('button');

// li.textContent = input.ariaValueMax;

// deleteButton.textContent = '❌';

// li.append(deleteButton);

// list.append(li);

button.addEventListener('click', function(){
    if (input.value.trim() !== "") {
        const chapterText = input.value.trim();

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapterText;

        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function(){
            // Remove item from the list
            list.remove();
            input.focus(); // focus to input field
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = ""; //clean input field -empty
    } else {
        // empty enter - return to  input
        input.focus();
    }
});