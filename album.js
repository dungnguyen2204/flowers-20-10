(() => {
  'use strict';

  const album = document.getElementById('memoryAlbum');
  const toggle = document.getElementById('toggleAlbum');

  toggle.addEventListener('click', () => {
    const expanded = album.classList.toggle('is-spread');
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.innerHTML = expanded
      ? 'Gấp album <span aria-hidden="true">♡</span>'
      : 'Xòe album <span aria-hidden="true">♡</span>';
  });

  // The album uses its original photos and does not read or save browser edits.
  window.albumPhotosReady = Promise.resolve();
})();
