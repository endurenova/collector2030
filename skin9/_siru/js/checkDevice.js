document.addEventListener('DOMContentLoaded', () => {
  const deviceWidth = window.innerWidth;
  if (deviceWidth <= 1024) {
  } else {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
    <img class="ufo-pointer" src="/SkinImg/img/gistar.png" alt="지스타" />`,
    );
    document.addEventListener('mousemove', e => {
      let mouseX = e.pageX + 50;
      let mouseY = e.pageY + 50;

      let cursor = document.querySelector('.ufo-pointer');
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });
  }
});
