'use strict';
/* global Results, Responses */
//eslint-disable-next-line no-unused-vars
const Listeners = (() => {
  const render = () => {
    document.querySelector('.results').innerHTML = Results.resVideos.videos.map(video => Results.generateVideoItemHtml(video));
  };
  const handleFormSubmit = () => {
    document.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      const searchInput = document.querySelector('#search-term')
      const searchTerm = searchInput.value;
      searchInput.value = '';
      Responses.fetchVideos(searchTerm, data => {
        Results.addVideosToStore(Results.decorateResponse(data));
        render();
      });
    });

  };
  return {
    render, handleFormSubmit
  };
})();