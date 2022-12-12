import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryCards = creatGalaryCards(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryCards);

galleryRef.addEventListener("click", onImgSmallClick);

function creatGalaryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
          </a>
        </div>
      `;
    })
    .join("");
}

function onImgSmallClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `);

  instance.show();

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      return instance.close();
    }
  });
}
