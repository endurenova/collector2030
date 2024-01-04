document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.querySelectorAll('#slide_add_category li');
  const deviceWidth = window.innerWidth;
  if (deviceWidth <= 1280) {
    Array.from(menuList).forEach(e => {
      e.addEventListener('click', event => {
        event.preventDefault();
        console.log(e);
        e.classList.toggle('selected');
      });
    });
  }
  console.log(deviceWidth);
});
