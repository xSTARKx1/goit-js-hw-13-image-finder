const basicLightbox = require('basiclightbox');

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const refOfImage = event.target.parentNode.href;

  const instance = basicLightbox.create(`<img src="${refOfImage}">`);

  instance.show();
}

export default openModal;
