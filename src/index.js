import './styles.css';

import createMarkup from './js/update-markup';
import refs from './js/refs';
import imageService from './js/image-service';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;

  imageService.query = form.elements.query.value;

  refs.gallery.innerHTML = '';
  form.reset();

  imageService.resetPage();

  loadImages(imageService);
});

refs.loadMoreButton.addEventListener('click', () => {
  loadImages(imageService);
});

async function loadImages(res) {
  try {
    const images = await res.fetchImages();
    const markup = createMarkup(images.hits);

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  } catch (eror) {
    throw error;
  }
}
