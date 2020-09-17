'use strict';

const recordPlayer = document.querySelector('.presentation__record-player');
const video = document.querySelector('.presentation__video');

recordPlayer.addEventListener('click', () => {
  recordPlayer.style.display = 'none';
  video.style.display = 'block';

  video.setAttribute(
    'src',
    'https://www.youtube.com/embed/T3psVSj1YC8?&autoplay=1'
  );
});
