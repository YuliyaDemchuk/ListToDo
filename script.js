const inputField = document.querySelector('.input-field');
const btnSubmit = document.querySelector('.btn-submit');
const listContainer = document.querySelector('.list-container');
btnSubmit.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerText = inputField.value;
    listItem.classList.add('list-item-added');
    listContainer.appendChild(listItem);
    inputField.value = '';
    listItem.addEventListener('click', () => {
        listItem.classList.add('list-item-removed');
    })
    listItem.addEventListener('dblclick', () => {
        listContainer.removeChild(listItem);
    })
})