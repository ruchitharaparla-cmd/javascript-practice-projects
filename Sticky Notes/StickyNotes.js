
const headingElement = document.createElement('h1');
headingElement.textContent = "Sticky Notes";

const containerElement = document.createElement('div');
containerElement.classList.add('sticky-notes-container');

const noteInput = document.createElement('textarea');
noteInput.placeholder = "Type a new note...";

const addButton = document.createElement('button');
addButton.textContent = "+";

const notesContainer = document.createElement('div');
notesContainer.classList.add('notes-container');

let noteCount = 0;

addButton.addEventListener('click', () => {
    const text = noteInput.value.trim();
//to get rid of notes with spaces only and get the value user enters as input in the testArea
    if (text === "") {
        return;
    }

    const noteElement = document.createElement('div');
    noteElement.classList.add('sticky-note');
    const colors = ["#d1e1ff", "#fefffe", "#fefec0", "#ffd6e0", "#d1ffd6"];

    const randomIndex = Math.floor(Math.random() * colors.length);

    noteElement.style.backgroundColor = colors[randomIndex];
    const noteContentElement = document.createElement('div');
    noteContentElement.classList.add('sticky-note-content');
    noteContentElement.contentEditable = true;
    
    noteContentElement.textContent = text;
//stores the text
    const deleteButton = document.createElement('button');

    deleteButton.textContent = "X";

    deleteButton.addEventListener('click', () => {
        noteElement.remove();
    });

    noteElement.appendChild(noteContentElement);
    noteElement.appendChild(deleteButton);
    notesContainer.appendChild(noteElement);

    noteCount++;
    noteInput.value = "";
});

containerElement.appendChild(noteInput);
containerElement.appendChild(addButton);
containerElement.appendChild(notesContainer);

document.body.appendChild(headingElement);
document.body.appendChild(containerElement);