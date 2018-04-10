'use strict';
// Create a namespace for all constants and methods
// related to getting a response from an API.
const Responses = (() => {
  const API_KEY = 'AIzaSyBFz0lxQL-8arxYWSUs8rmCQSLM6jqAwrI';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const fetchVideos = (searchTerm, fn) => {
    const query = {
      q: `${searchTerm} in:name`,
      key: API_KEY,
      part: 'snippet'
    };
    $.getJSON(BASE_URL, query, fn);
  };
})();