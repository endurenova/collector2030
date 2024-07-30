document.addEventListener('mousemove', e => {
  let mouseX = e.pageX + 100;
  let mouseY = e.pageY + 100;

  let cursor = document.querySelector('.ufo-pointer');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});
