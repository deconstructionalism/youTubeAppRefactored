'use strict';
/* global Results */
const Listeners = (() => {
  const render = () => {
    $('.results').html(Results.videos.map(video => Results.generateVideoItemHtml(video)));
  };
  return {
    render
  };
})();