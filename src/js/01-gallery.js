"use strict";
import { galleryItems } from './gallery-items.js';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__item')
    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image')
   
  galleryLink.href = item.original;
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

     return galleryItem; 
  }
    
const galleryItemsElements = galleryItems.map(item => createGalleryItem(item));
gallery.append(...galleryItemsElements);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

console.log(galleryItems);