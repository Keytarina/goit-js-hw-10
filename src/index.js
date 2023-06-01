const refs = {
  select: document.querySelector('select.breed-select'),
  loader: document.querySelector('p.loader'),
  error: document.querySelector('p.error'),
  catInfo: document.querySelector('div.catInfo'),
};
const API_KEY =
  'live_CUkWo8xwKlZSCAX2lEuoE15SIepz7g84yjkY3DzjbuN143fz7YOxwdY7dSYPAVOA';
const headers = new URLSearchParams({
  'x-api-key':
    'live_CUkWo8xwKlZSCAX2lEuoE15SIepz7g84yjkY3DzjbuN143fz7YOxwdY7dSYPAVOA',
});

fetch(`https://api.thecatapi.com/v1/breeds?${headers}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(cats => {
    let markup = '';
    cats.forEach(cat => {
      markup += `<option value="${cat.id}">${cat.name}</option>`;
    });
    console.log(markup);
    refs.select.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });

function fetchCats() {
  return fetch()
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then()
    .catch(error => {
      return error;
    });
}
