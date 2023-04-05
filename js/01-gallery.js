import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </li>
    `;
    })
    .join("");
}

galleryRef.addEventListener("click", onGalleryRefClick);

function onGalleryRefClick(e) {
  e.preventDefault();
  //const galleryImage =
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const sourceImg = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${sourceImg}">
`);

  instance.show();
}
