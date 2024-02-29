document.addEventListener('mousemove', e => {
  let mouseX = e.pageX + 10;
  let mouseY = e.pageY + 10;

  let cursor = document.querySelector('.ufo-pointer');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});
