'use strict';
const Store = (() => {
  const videos = [];
  const decorateResponse = response => {
    return response.items.map(item => {
      const id = item.id.videoId;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.default.url;
      return {id, title, thumbnail};
    });
  };
  const generateVideoItemHtml = video => {
    return `
      <li>
        <img src="${video.thumbnail}">
        <p>${video.title}</p>
      </li>
    `;
  };
  const addVideosToStore = (videos) => {
    this.videos = videos;
  };
  return {
    videos, decorateResponse, generateVideoItemHtml, addVideosToStore
  };
})();