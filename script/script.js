const searchButton = document.querySelector('.search-button');
const modalBox = document.querySelector('.modal-box');
const closeButton = document.querySelector('.modal-close-button');

searchButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalBox.classList.remove('modal-closed');
});

closeButton.addEventListener('click', (evt) => {
  modalBox.classList.add('modal-closed');
});
