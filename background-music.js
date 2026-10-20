(() => {
  const button = document.getElementById('musicToggle');
  if (!button) return;

  const label = button.querySelector('.music-label');
  const player = new Audio('./assets/angel-baby_RBZwqvE8.mp3');
  player.loop = true;
  player.volume = 0.35;

  function updateButton(isPlaying) {
    button.setAttribute('aria-pressed', String(isPlaying));
    button.setAttribute('aria-label', isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền');
    label.textContent = isPlaying ? 'Tắt nhạc' : 'Bật nhạc';
  }

  // Try autoplay on entry. Browsers may block audible autoplay until user interaction.
  player.play().then(() => updateButton(true)).catch(() => updateButton(false));

  button.addEventListener('click', async () => {
    if (player.paused) {
      try {
        await player.play();
        updateButton(true);
      } catch {
        updateButton(false);
        label.textContent = 'Không phát được';
      }
    } else {
      player.pause();
      updateButton(false);
    }
  });
})();
