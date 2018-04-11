'use strict';
//eslint-disable-next-line no-unused-vars
const Responses = (() => {
  const API_KEY = 'AIzaSyBFz0lxQL-8arxYWSUs8rmCQSLM6jqAwrI';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const fetchVideos = (searchTerm, fn) => {
    const query = {
      q: `${searchTerm} in:name`,
      key: API_KEY,
      part: 'snippet'
    };
    axios.get(BASE_URL, {
      params: query})
      .then(response => fn(response.data))
  }
  return {
    API_KEY, BASE_URL, fetchVideos
  };
})();