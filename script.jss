var sound = new Howl({
  src: ['https://ia801809.us.archive.org/33/items/daft-punk-instant-crush/05.%20Daft%20Punk%20-%20Instant%20Crush.mp3'],
  autoplay: true,
  loop: true,
  volume: 1.0
});

sound.play();

document.getElementById('song-info').innerHTML = 'Now playing: Daft Punk - Instant Crush';

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

  // Show the selected page
  document.getElementById(pageId).style.display = 'block';
}
