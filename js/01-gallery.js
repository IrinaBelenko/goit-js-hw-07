import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryRef = document.querySelector(".gallery");
let instance;

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", onGalleryRefClick);

document.addEventListener("keyup", enableDisableEvent);

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

function enableDisableEvent() {
  if (basicLightbox.visible()) {
    document.addEventListener("keydown", onKeyPress);
  } else {
    document.removeEventListener("keydown", onKeyPress);
  }
}

function onGalleryRefClick(e) {
  e.preventDefault();
  //const galleryImage =
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const sourceImg = e.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${sourceImg}">
`);

  instance.show();
  enableDisableEvent();
}

function onKeyPress({ code }) {
  if (code === "Escape") {
    instance.close();
  }
}
