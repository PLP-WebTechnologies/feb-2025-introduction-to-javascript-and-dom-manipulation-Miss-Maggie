
const textElement = document.getElementById('text');
const newElementContainer = document.getElementById('newElementContainer');

document.getElementById('changeTextButton').addEventListener('click', () => {
    textElement.textContent = 'Your text has been changed!';
});

document.getElementById('toggleHighlightButton').addEventListener('click', () => {
    textElement.classList.toggle('highlight');
});

document.getElementById('addElementButton').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'You have added a new element!';
    newElementContainer.appendChild(newElement);
});

document.getElementById('removeElementButton').addEventListener('click', () => {
    if (newElementContainer.lastChild) {
        newElementContainer.removeChild(newElementContainer.lastChild);
    }
});