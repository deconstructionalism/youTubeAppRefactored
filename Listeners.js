'use strict';
/* global Results, Responses */
//eslint-disable-next-line no-unused-vars
const Listeners = (() => {
  const render = () => {
    $('.results').html(Results.videos.map(video => Results.generateVideoItemHtml(video)));
  };
  const handleFormSubmit = () => {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm = $('#search-term').val();
      $('#search-term').val('');
      Responses.fetchVideos(searchTerm, data => {
        Results.addVideosToStore(Results.decorateResponse(data));
        this.render();
      });
    });
  };
  return {
    render, handleFormSubmit
  };
})();