// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const listEl = document.querySelector('.gallery');

createGalleryItems(galleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSlide: true,
  animationSpeed: 150,
  fadeSpeed: 150,
});

function markupGalleryItem({ preview, original, description }) {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
  `;
}

function createGalleryItems(arr) {
  const galleryElements = arr.map(markupGalleryItem).join('');

  listEl.innerHTML = galleryElements;
}
