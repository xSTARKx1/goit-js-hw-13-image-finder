import './styles.css';

import createMarkup from './js/update-markup';
import refs from './js/refs';
import apiService from './js/api-service';
import openModal from './js/modal-window';

const basicLightbox = require('basiclightbox');

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;

  apiService.query = form.elements.query.value;

  refs.gallery.innerHTML = '';
  form.reset();

  apiService.resetPage();

  loadImages(apiService);
});

refs.loadMoreButton.addEventListener('click', () => {
  loadImages(apiService);
});

async function loadImages(res) {
  try {
    const images = await res.fetchImages();
    const markup = createMarkup(images.hits);

    refs.loadMoreButton.classList.remove('is-hiden');

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  } catch (eror) {
    throw error;
  }
}

refs.gallery.addEventListener('click', openModal);
