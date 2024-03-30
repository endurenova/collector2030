document.addEventListener('DOMContentLoaded', () => {
  const mainMenuList = document.querySelectorAll('#slide_add_category > li > a');
  const subMenuList = document.querySelectorAll('#slide_add_category .sub_cate01 > li a');
  const deviceWidth = window.innerWidth;
  if (deviceWidth <= 1280) {
    Array.from(mainMenuList).forEach(e => {
      e.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        e.parentElement.classList.toggle('selected');
      });
    });
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
