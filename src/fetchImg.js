const API_KEY = '28107537-0c84d9ef5bea189e41a09827f';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  });
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&${params}&page=${currentPage}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
