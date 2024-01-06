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
  }
});
