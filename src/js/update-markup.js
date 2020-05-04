import updateImageGallery from '../templates/card-image.hbs';
import refs from './refs';

function createMarkup(images) {
  const markup = updateImageGallery(images);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default createMarkup;
