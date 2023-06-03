import './css/styles.css';
import fetchCatByBreed from './cat-api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';

const refs = {
  select: document.querySelector('select.breed-select'),
  loader: document.querySelector('span.loader'),
  error: document.querySelector('p.error'),
  catInfo: document.querySelector('div.cat-info'),
};

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_CUkWo8xwKlZSCAX2lEuoE15SIepz7g84yjkY3DzjbuN143fz7YOxwdY7dSYPAVOA';

fetch(`${BASE_URL}/breeds`, {
  headers: {
    'x-api-key': API_KEY,
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(cats => {
    let listOfCats = '';

    cats.forEach(cat => {
      listOfCats += `<option value="${cat.id}">${cat.name}</option>`;
    });

    refs.select.innerHTML = listOfCats;
    refs.loader.classList.toggle('is-hidden');
    new SlimSelect({
      select: refs.select,
      settings: {
        placeholderText: 'Please, choose a breed',
      },
    });
  })
  .catch(error => {
    // опрацювання помилки
    console.log(error.message);
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  });

refs.select.addEventListener('change', event => {
  refs.loader.classList.toggle('is-hidden');
  fetchCatByBreed(event.target.value, BASE_URL, API_KEY)
    .then(data => {
      refs.loader.classList.toggle('is-hidden');
      renderCatCard(...data);
    })
    .catch(error => {
      // опрацювання помилки
      console.log(error.message);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
});

function renderCatCard(data) {
  const { url, breeds } = data;

  refs.catInfo.innerHTML = breeds
    .map(breed => {
      return `<img class="cat-photo" src="${url}" />
              <div class="cat-text-content">
              <h class="cat-title">${breed.name}</h>
              <p class="cat-description">${breed.description}</p>
              <p class="cat-temperament"><span>Temperament:</span> ${breed.temperament}</p>
              </div>`;
    })
    .join('');
}
