const inputPageNumber = document.querySelector(".pageNumber");
const inputLimit = document.querySelector(".limit");
const btnRequest = document.querySelector(".btnRequest");
const outputSpan = document.querySelector("span");
const outputPhotos = document.querySelector("div");

btnRequest.addEventListener("click", submitButtonHandle);

if (photosFromLocalStorage())
  write("Загружены последние просмотренные фото.");

function submitButtonHandle() {
  const pageNumber = inputPageNumber.value;
  const limit = inputLimit.value;

  if ((pageNumber < 1 || pageNumber > 10 || isNaN(pageNumber)) && (limit < 1 || limit > 10 || isNaN(limit))) {
    write("Номер страницы и лимит вне диапазона от 1 до 10.");
    return;
  } else
    if (pageNumber < 1 || pageNumber > 10 || isNaN(pageNumber)) {
      write("Номер страницы вне диапазона от 1 до 10.");
      return;
    } else
      if (limit < 1 || limit > 10 || isNaN(limit)) {
        write("Лимит вне диапазона от 1 до 10.");
        return;
      }

  fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
    .then((response) => response.json())
    .then((json) => {
      loadPhotos(json);
      savePhotosLocalStorage();
      write("Фото загружены.");
    })
    .catch((reason) => {
      write("Ошибка: " + reason);
    });
}

function write(text) {
  outputSpan.innerHTML = text;
}

function loadPhotos(photo) {
  let cards = String();

  photo.forEach(item => {
    const cardDiv = `<div>
                                <img
                                  src="${item.download_url}"
                                  style="width: 150px; margin-right: 30px"
                                />
                                <p>${item.author}</p>
                              </div>`;
    cards = cards + cardDiv;
  });

  outputPhotos.innerHTML = cards;
}

function savePhotosLocalStorage() {
  localStorage.setItem("lastPhotos", outputPhotos.innerHTML);
}

function photosFromLocalStorage() {
  outputPhotos.innerHTML = localStorage.getItem("lastPhotos");
  return outputPhotos.innerHTML.length > 0;
}