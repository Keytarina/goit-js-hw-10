export default fetchCatByBreed = (breedId, BASE_URL, API_KEY) => {
  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
